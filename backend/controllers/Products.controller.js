const Product = require("../models/Product.model");
const path = require("path");
const fs = require("fs");

const createProduct = async (req, res) => {
  try {
    // Check if files are uploaded
    if (
      !req.files ||
      !req.files.images ||
      !Array.isArray(req.files.images) ||
      req.files.images.length < 3
    ) {
      return res.status(400).json({ message: "Three images must be uploaded" });
    }

    const { name, category, description, price } = req.body;

    // Validate required fields
    if (!name || !category || !description || !price) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    // Validate price
    if (isNaN(price) || price <= 0) {
      return res.status(400).json({ message: "Please provide a valid price" });
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
      description,
      price,
      images: uploadedImageFiles,
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
  const { name, category, description, price } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        category,
        description,
        price,
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
  const product = await Product.findById(id);
  try {
    res.json(product);
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products: products });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
module.exports = {
  createProduct,
  deleteProductById,
  updateProduct,
  getproductbyId,
  getAllProducts,
};
