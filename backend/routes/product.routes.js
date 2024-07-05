const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");

const router = express.Router();
const {
  createProduct,
  deleteProductById,
  updateProduct,
  getproductbyId,
  getAllProducts,
  getProductNumber,
} = require("../controllers/Products.controller");

router.post("/create", authMiddleware, adminMiddleware, createProduct);
router.post("/delete/:id", authMiddleware, deleteProductById);
router.post("/update/:id", authMiddleware, adminMiddleware, updateProduct);
router.get("/:id", authMiddleware, getproductbyId);
router.get("/", authMiddleware, getAllProducts);
router.get("/products/number", authMiddleware, getProductNumber);
module.exports = router;
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
