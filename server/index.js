const express = require('express');
const path = require('path');
const clc = require('cli-color');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();

const server = express();
const isDev = process.env.NODE_ENV !== 'production';

server.use(
  cors({
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200,
  })
);

server.use(express.json());
server.use(morgan('dev'));

// Priority serve any static files.
server.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
server.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
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
