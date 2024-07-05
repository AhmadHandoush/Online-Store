const Category = require("../models/Category.model");
const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const createdCategory = await Category.create({ name });
    res.json({
      message: "category created Successfully",
      category: createdCategory,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error!");
  }
};
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    return res.json({ message: "category deleted succcessfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("Internal server error!");
  }
};
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {
        name,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "category updated successfully",
      category: updatedCategory,
    });
  } catch (err) {
    return res.status(500).send("Internal server error!");
  }
};
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json({ categories: categories });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getCategorybyId = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  try {
    res.json(category);
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getCategoriesNumber = async (req, res) => {
  try {
    const categories = await Category.countDocuments();
    res.json({
      categories: categories,
    });
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  getAllCategories,
  getCategorybyId,
  getCategoriesNumber
};
