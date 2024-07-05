const Brand = require("../models/Brand.model");
const createBrand = async (req, res) => {
  const { name } = req.body;
  try {
    const createdBrand = await Brand.create({ name });
    res.json({
      message: "Brand created Successfully",
      brand: createdBrand,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error!");
  }
};
const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    return res.json({ message: "category deleted succcessfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("Internal server error!");
  }
};
const updateBrand = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      id,
      {
        name,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "category updated successfully",
      brand: updatedBrand,
    });
  } catch (err) {
    return res.status(500).send("Internal server error!");
  }
};
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.json({ brands: brands });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getBrandById = async (req, res) => {
  const { id } = req.params;
  const brand = await brand.findById(id);
  try {
    res.json(brand);
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getBrandsNumber = async (req, res) => {
  try {
    const brands = await Brand.countDocuments();
    res.json({
      brands: brands,
    });
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
};

module.exports = {
  createBrand,
  deleteBrand,
  getBrandById,
  updateBrand,
  getAllBrands,
  getBrandsNumber
};
