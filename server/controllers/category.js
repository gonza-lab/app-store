const { request, response } = require('express');
const Category = require('../models/Category');

const createCategory = async (req = request, res = response) => {
  try {
    const { name } = req.body;
    const categoryDB = new Category({ name });
    await categoryDB.save();

    res.json({
      ok: true,
      ...categoryDB.toJSON(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el adminitrador.',
    });
  }
};

const getCategories = async (req = request, res = response) => {
  try {
    const categoriesDB = await Category.find();

    res.json({
      ok: true,
      categories: [...categoriesDB],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Ha ocurrido un error, hable con el adminitrador.',
    });
  }
};

module.exports = { createCategory, getCategories };
