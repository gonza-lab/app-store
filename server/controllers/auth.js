const Usuario = require('../models/User');
const createJWT = require('../helpers/createJWT');

const createUser = async (req, res) => {
  try {
    const user = new Usuario(req.body);
    await user.encryptPassword();
    await user.save();

    const token = await createJWT(user._id, user.name);

    res.status(201).json({
      ok: true,
      _id: user._id,
      token,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Porfavor, hable con el administrador.',
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await Usuario.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      return res.status(400).json({
        ok: false,
        msg: 'Contraseña o email incorrecto',
      });
    } else {
      const token = await createJWT(user._id, user.name);

      res.json({
        ok: true,
        _id: user._id,
        name: user.name,
        token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Porfavor, hable con el administrador',
    });
  }
};

const renewUser = async (req, res) => {
  try {
    const token = await createJWT(req.id, req.name);

    res.json({
      ok: true,
      _id: req._id,
      token,
      name: req.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

module.exports = { createUser, loginUser, renewUser };
