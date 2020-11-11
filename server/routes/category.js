const { Router } = require('express');
const { createCategory, getCategories } = require('../controllers/category');
const {
  createCategoryValidators,
} = require('../validators/category-validators');
const { jwtValidator } = require('../validators/jwt-validator');

const route = Router();

/*
  ${host}/api/category
*/

route.post('/', [jwtValidator, ...createCategoryValidators], createCategory);
route.get('/', getCategories);

module.exports = route;
