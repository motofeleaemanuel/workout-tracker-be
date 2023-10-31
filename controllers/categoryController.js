const Category = require("../models/Category");

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    if (!category)
      return res.status(401).send({ message: "Could not create category" });
    res.status(200).send(category);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories)
      return res.status(401).send({ message: "Could not find categories" });
    res.status(200).send(categories);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = { createCategory, getAllCategories };
