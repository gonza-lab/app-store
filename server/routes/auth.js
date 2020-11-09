const { Router } = require('express');
const { createUser, loginUser, renewUser } = require('../controllers/auth');
const { jwtValidator } = require('../validators/jwt-validator');
const {
  registerValidator,
  loginValidator,
} = require('../validators/auth-validators');

const router = Router();

/*
  ${host}/api/auth
*/

router.post('/register', [...registerValidator], createUser);
router.post('/login', [...loginValidator], loginUser);
router.get('/renew', jwtValidator, renewUser);

module.exports = router;