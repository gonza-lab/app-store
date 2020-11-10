const { Router } = require('express');
const { deleteApp } = require('../controllers/app');
const { buyApp, removeApp } = require('../controllers/buy');
const { buyAppValidators } = require('../validators/buy-validators');
const { jwtValidator } = require('../validators/jwt-validator');

/*
${host}/api/buy
*/

const route = Router();
route.use(jwtValidator);

route.post('/', [...buyAppValidators], buyApp);
route.delete('/', removeApp);

module.exports = route;
