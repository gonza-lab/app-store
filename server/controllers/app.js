const { request, response } = require('express');
const Application = require('../models/Application');
const Category = require('../models/Category');
const User = require('../models/User');

const createApp = async (req = request, res = response) => {
  try {
    const userDB = await User.findById(req._id);

    if (userDB.isDev) {
      const newApp = new Application({
        ...req.body,
        user: req._id,
        date: new Date(),
      });
      const categoryDB = await Category.findById(req.body.category);
      categoryDB.apps.push(newApp._id);

      await newApp.save();
      await categoryDB.save();

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
    const appsDB = await Application.find()
      .populate('user', 'name -_id')
      .populate('category', 'name');

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
    const appDB = await Application.findById(req.body._id);
    const categoryDB = await Category.findById(appDB.category);

    categoryDB.apps.splice(categoryDB.apps.indexOf(appDB._id), 1);

    await appDB.deleteOne();
    await categoryDB.save();

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
