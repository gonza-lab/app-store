const { Router } = require('express');
const { createApp } = require('../controllers/app');
const {
  createAppValidators,
} = require('../validators/app-validators');
const { jwtValidator } = require('../validators/jwt-validator');

/*
  ${host}/api/app
*/

const route = Router();

route.use(jwtValidator);

route.post('/', createAppValidators, createApp);

module.exports = route;
