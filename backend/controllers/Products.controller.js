const Product = require("../models/Product.model");
const path = require("path");
const fs = require("fs");

const createProduct = async (req, res) => {
  try {
    // Check if a file is uploaded
    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: "No image uploaded" });
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

    const imageFile = req.files.image;

    // Validate file type and size (optional)
    const validMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/jpg",
    ];
    if (!validMimeTypes.includes(imageFile.mimetype)) {
      return res.status(400).json({ message: "Invalid file type" });
    }

    const maxFileSize = 5 * 1024 * 1024; // 5 MB
    if (imageFile.size > maxFileSize) {
      return res.status(400).json({ message: "File size exceeds limit" });
    }

    // Create a unique file name
    const fileName = `${Date.now()}_${imageFile.name}`;
    const uploadPath = path.join(__dirname, "..", "uploads", fileName);

    // Move the file to the desired location
    imageFile.mv(uploadPath, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "File upload failed" });
      }

      // Create new product
      const newProduct = new Product({
        name,
        category,
        description,
        price,
        image: fileName, // Save the file name or path in the database
      });

      await newProduct.save();

      res
        .status(201)
        .json({ message: "Product created successfully", product: newProduct });
    });
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

module.exports = {
  createProduct,
  deleteProductById,
  updateProduct,
};
