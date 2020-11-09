const express = require('express');
const path = require('path');
const clc = require('cli-color');
const morgan = require('morgan');
const cors = require('cors');
const { dbConnection } = require('./database/config');

require('dotenv').config();

const server = express();
dbConnection();

const isDev = process.env.NODE_ENV !== 'production';

server.use(
  cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
  })
);

server.use(express.json());
if (isDev) {
  server.use(morgan('dev'));
}

server.use(express.static(path.resolve(__dirname, '../react-ui/build')));

server.use('/api/auth', require('./routes/auth'));
server.use('/api/app', require('./routes/app'));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

server.listen(process.env.PORT || '8080', () => {
  if (isDev) {
    process.stdout.write(clc.erase.screen);
    process.stdout.write(clc.move.top);
  }

  console.log('Server Online');
  console.log(`Puerto ${process.env.PORT || '8080'}`);
});
