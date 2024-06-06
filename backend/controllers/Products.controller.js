const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single("image");

const createProduct = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    const { name, description, price } = req.body;
    const image = req.file.path;

    try {
      const product = new Product({ name, description, price, image });
      await product.save();
      res
        .status(201)
        .json({ message: "Product created successfully", product });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
};

module.exports = createProduct;
