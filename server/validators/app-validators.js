const { check } = require('express-validator');
const User = require('../models/User');
const fieldValidator = require('./field-validator');

const createAppValidators = [
  check('name', 'Debe enviar un nombre de al menos 3 caracteres').isLength({
    min: 3,
  }),
  check(
    'category',
    'Debe enviar una categoria de al menos 3 caracteres'
  ).isLength({
    min: 3,
  }),
  check('price', 'Debe enviar un precio valido').isNumeric(),
  check('logo', 'Debe enviar una url de su logo valida').isURL(),
  check('user', 'Debe enviar un id de usuario valido')
    .isLength({ min: 24, max: 24 })
    .custom(async (user) => {
      const userExists = await User.exists({ _id: user });

      if (!userExists) {
        throw new Error('El usuario que envio no existe');
      }
    }),
  fieldValidator,
];

module.exports = { createAppValidators };
