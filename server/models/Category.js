const { Schema, model } = require('mongoose');
require('./Application');

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  apps: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
});

CategorySchema.method('toJSON', function () {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model('Category', CategorySchema);
