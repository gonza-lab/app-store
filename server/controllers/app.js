const { request, response } = require('express');

const createApp = async (req = request, res = response) => {
  try {
    res.status(201).json({
      ok: true,
      msg: 'created',
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el administrador.',
    });
  }
};

module.exports = { createApp };
