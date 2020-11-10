const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const jwtValidator = (req = request, res = response, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la peticion',
    });
  }

  try {
    const { id, name } = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req._id = id;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no valido',
    });
  }

  next();
};

module.exports = { jwtValidator };