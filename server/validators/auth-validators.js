const { check } = require('express-validator');
const User = require('../models/User');
const fieldValidator = require('../validators/field-validator');

const registerValidator = [
  check('email', 'Debe enviar un email válido.')
    .isEmail()
    .custom(async (email) => {
      const existsUser = await User.exists({ email });

      if (existsUser) {
        throw new Error('El email que envio se encuentra ocupado');
      }
    }),
  check('name', 'Debe enviar un nombre de al menos 5 caracteres.').isLength({
    min: 5,
  }),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Debe enviar una contraseña de al menos 5 caracteres')
    .matches(/\d/)
    .withMessage('La contraseña debe contener un numero'),
  check(
    'isDev',
    'Debe especificar si el usuario es de tipo desarrollador o no'
  ).isBoolean(),
  fieldValidator,
];

const loginValidator = [
  check('email', 'Debe enviar un email válido.').isEmail(),
  check('password')
    .isLength({ min: 5 })
    .withMessage('Debe enviar una contraseña de al menos 5 caracteres')
    .matches(/\d/)
    .withMessage('La contraseña debe contener un numero'),
  fieldValidator,
];

module.exports = { registerValidator, loginValidator };
