const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isDev: {
    type: Boolean,
    required: true,
  },
});

UserSchema.methods.encryptPassword = async function () {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
};

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = model('User', UserSchema);
