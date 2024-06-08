const express = require("express");
const {
  createProduct,
  deleteProductById,
  updateProduct,
  getproductbyId,
} = require("../controllers/Products.controller");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const upload = require("../middlware/upload.middleware");
const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createProduct);
router.delete(
  "/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteProductById
);
router.put("/update/:id", authMiddleware, adminMiddleware, updateProduct);
router.get("/:id", authMiddleware, adminMiddleware, getproductbyId);
module.exports = router;
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
