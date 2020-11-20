const { request, response } = require('express');
const User = require('../models/User');

const buyApp = async (req = request, res = response) => {
  try {
    console.log(req._id);
    const { _id } = req.body;
    const userDB = await User.findById(req._id);


    if (!userDB.apps.includes(_id)) {
      userDB.apps.push(_id);
      userDB.save();

      res.json({
        ok: true,
      });
    } else {
      res.status(400).json({
        ok: false,
        msg: 'Usted ya adquirio esta app',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el administrador',
    });
  }
};

const removeApp = async (req = request, res = response) => {
  try {
    const { _id } = req.body;
    const userDB = await User.findById(req._id);
    const indexApp = userDB.apps.indexOf(_id);

    if (indexApp !== -1) {
      userDB.apps.splice(indexApp, 1);
      userDB.save();

      res.json({
        ok: true,
      });
    } else {
      res.status(400).json({
        ok: false,
        msg: 'Usted no cuenta con esta app',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el administrador',
    });
  }
};

module.exports = { buyApp, removeApp };
