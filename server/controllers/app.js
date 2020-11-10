const { request, response } = require('express');
const Application = require('../models/Application');
const User = require('../models/User');

const createApp = async (req = request, res = response) => {
  try {
    const userDB = await User.findById(req._id);

    if (userDB.isDev) {
      const newApp = new Application({ ...req.body, user: req._id });
      await newApp.save();

      res.status(201).json({
        ok: true,
        msg: 'created',
        ...newApp.toJSON(),
      });
    } else {
      res.status(401).json({
        ok: false,
        msg: 'No autorizado a crear una aplicacion.',
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el administrador.',
    });
  }
};

const readApps = async (req = request, res = response) => {
  try {
    const appsDB = await Application.find().populate('user', '_id name');

    console.log(appsDB);
    res.json({
      ok: true,
      apps: appsDB,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el administrador.',
    });
  }
};

const updateApp = async (req = request, res = response) => {
  try {
    const appDB = await Application.findById(req.body._id);

    const { price, logo } = req.body;
    appDB.price = price;
    appDB.logo = logo;
    appDB.save();

    res.json({
      ok: true,
      ...appDB.toJSON(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el administrador.',
    });
  }
};

const deleteApp = async (req = request, res = response) => {
  try {
    await Application.findByIdAndDelete(req.body._id);

    res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el administrador.',
    });
  }
};
module.exports = { createApp, updateApp, readApps, deleteApp };
