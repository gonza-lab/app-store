const jwt = require('jsonwebtoken');

const createJWT = (id, name, isDev, apps) => {
  return new Promise((resolve, reject) => {
    const payload = { id, name, isDev, apps };

    jwt.sign(
      payload,
      process.env.JWT_PRIVATE_KEY, //Sign
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = createJWT;