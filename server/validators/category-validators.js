const { check } = require('express-validator');
const Category = require('../models/Category');
const fieldValidator = require('./field-validator');

const createCategoryValidators = [
  check('name', 'Debe enviar un nombre de categoria valido')
    .isString()
    .custom(async (name) => {
      console.log(name);
      const existsCategory = await Category.exists({ name });

      if (existsCategory) {
        throw new Error(
          'El nombre de categoria que envio se encuentra ocupado'
        );
      }
    }),
  fieldValidator,
];

module.exports = { createCategoryValidators };
