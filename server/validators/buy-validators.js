const { check } = require('express-validator');
const Application = require('../models/Application');
const fieldValidator = require('./field-validator');

const buyAppValidators = [
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

module.exports = { buyAppValidators };
