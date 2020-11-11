const { check } = require('express-validator');
const Application = require('../models/Application');
const Category = require('../models/Category');
const fieldValidator = require('./field-validator');

const createAppValidators = [
  check('name', 'Debe enviar un nombre de al menos 3 caracteres').isLength({
    min: 3,
  }),
  check('category', 'Debe enviar un id de categoria valida')
    .isLength({
      min: 24,
      max: 24,
    })
    .custom(async (category) => {
      const categoryExists = await Category.exists({ _id: category });

      if (!categoryExists) {
        throw new Error('La categoria que envio no existe');
      }
    }),
  check('price', 'Debe enviar un precio valido').isNumeric(),
  check('logo', 'Debe enviar una url de su logo valida').isURL(),
  fieldValidator,
];

const updateAppValidators = [
  check('price', 'Debe enviar un precio valido').isNumeric(),
  check('logo', 'Debe enviar una url de su logo valida').isURL(),
  check('_id', 'Debe enviar un id de pantalla valido válido')
    .isLength({ min: 24, max: 24 })
    .custom(async (_id) => {
      const existsApp = await Application.exists({ _id });

      if (!existsApp) {
        throw new Error('El id que envio no coincide con ninguna app');
      }
    }),
  fieldValidator,
];

const deleteAppValidators = [
  check('_id', 'Debe enviar un id de una app válida')
    .isLength({ min: 24, max: 24 })
    .custom(async (_id) => {
      const existsApp = await Application.exists({ _id });

      if (!existsApp) {
        throw new Error('El id que envio no coincide con ninguna app');
      }
    }),
  fieldValidator,
];

module.exports = {
  createAppValidators,
  updateAppValidators,
  deleteAppValidators,
};
