const Product = require("../models/Product.model");
const Category = require("../models/Category.model");
const Brand = require("../models/Brand.model");
const Order = require("../models/Order.model");

const path = require("path");
const fs = require("fs");

const createProduct = async (req, res) => {
  try {
    if (
      !req.files ||
      !req.files.images ||
      !Array.isArray(req.files.images) ||
      req.files.images.length < 3
    ) {
      return res.status(400).json({ message: "Three images must be uploaded" });
    }

    const {
      name,
      category,
      description,
      price,
      quantity,
      brand,
      gender,
      color,
    } = req.body;

    // Validate required fields
    if (
      !name ||
      !category ||
      !description ||
      !price ||
      !quantity ||
      !brand ||
      !gender ||
      !color
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Validate price
    if (isNaN(price) || price <= 0) {
      return res.status(400).json({ message: "Please provide a valid price" });
    }
    // validate quantity
    if (isNaN(quantity) || quantity <= 0) {
      return res
        .status(400)
        .json({ message: "quantity should be greater than or equal to 1" });
    }

    const images = req.files.images;

    // Validate file type and size
    const validMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/jpg",
    ];
    const maxFileSize = 5 * 1024 * 1024; // 5 MB

    const uploadedImageFiles = [];

    for (const imageFile of images) {
      if (!validMimeTypes.includes(imageFile.mimetype)) {
        return res.status(400).json({ message: "Invalid file type" });
      }

      if (imageFile.size > maxFileSize) {
        return res.status(400).json({ message: "File size exceeds limit" });
      }

      const fileName = `${Date.now()}_${imageFile.name}`;
      const uploadPath = path.join(__dirname, "..", "uploads", fileName);

      await new Promise((resolve, reject) => {
        imageFile.mv(uploadPath, (err) => {
          if (err) {
            console.error(err);
            return reject("File upload failed");
          }
          uploadedImageFiles.push(fileName);
          resolve();
        });
      });
    }

    // Create new product
    const newProduct = new Product({
      name,
      category,
      brand,
      description,
      price,
      images: uploadedImageFiles,
      quantity,
      gender,
      color,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return res.json({ message: "Product deleted succcessfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("Internal server error!");
  }
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, category, description, price, brand } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        category,
        description,
        price,
        brand,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    return res.status(500).send("Internal server error!");
  }
};

const getproductbyId = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
    .populate("category")
    .populate("brand");
  try {
    res.json(product);
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category")
      .populate("brand");
    res.json(products);
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getdataNumber = async (req, res) => {
  try {
    const products = await Product.countDocuments();
    const categories = await Category.countDocuments();
    const brands = await Brand.countDocuments();
    const orders = await Order.countDocuments();
    res.json({
      products: products,
      categories: categories,
      brands: brands,
      orders: orders,
    });
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
};
module.exports = {
  createProduct,
  deleteProductById,
  updateProduct,
  getproductbyId,
  getAllProducts,
  getdataNumber,
};
