const { request, response } = require('express');
const Application = require('../models/Application');

const isUserApp = async (req = request, res = response, next) => {
  try {
    const appDB = await Application.findById(req.body._id);

    if (appDB.user != req._id) {
      return res.status(401).json({
        ok: false,
        msg: 'Usted no tiene los permisos para modificar esta aplicacion',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el administrador.',
    });
  }

  next();
};

module.exports = { isUserApp };
