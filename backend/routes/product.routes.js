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
} = require("../controllers/Products.controller");

router.post("/create", authMiddleware, adminMiddleware, createProduct);
router.delete(
  "/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteProductById
);
router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct);
router.get("/:id", authMiddleware, adminMiddleware, getproductbyId);
router.get("/products", authMiddleware, adminMiddleware, getAllProducts);
module.exports = router;
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
