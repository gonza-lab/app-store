const { Router } = require('express');
const {
  createApp,
  updateApp,
  readApps,
  deleteApp,
} = require('../controllers/app');
const {
  createAppValidators,
  updateAppValidators,
  deleteAppValidators,
} = require('../validators/app-validators');
const { isUserApp } = require('../validators/isAppUser-validator');
const { jwtValidator } = require('../validators/jwt-validator');

/*
  ${host}/api/app
*/

const route = Router();

route.post('/', [jwtValidator, ...createAppValidators], createApp);
route.get('/', readApps);
route.put('/', [jwtValidator, ...updateAppValidators, isUserApp], updateApp);
route.delete('/', [jwtValidator, ...deleteAppValidators, isUserApp], deleteApp);

module.exports = route;
