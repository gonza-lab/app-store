const { Schema, model } = require('mongoose');
require('./User');
require('./Category');

const AppSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  priceHistory: [
    {
      modified: { type: Date, required: true },
      price: { type: Number, required: true },
    },
  ],
  logo: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    required: true,
  },
});

AppSchema.method('toJSON', function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model('Application', AppSchema);
