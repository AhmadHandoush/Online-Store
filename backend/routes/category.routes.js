const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const {
  createCategory,
  deleteCategory,
  updateCategory,
  getAllCategories,
  getCategorybyId,
  getCategoriesNumber,
} = require("../controllers/Category.controller");

const router = express.Router();
router.post("/create", authMiddleware, adminMiddleware, createCategory);
router.get("/", getAllCategories);
router.get("/categories/number", authMiddleware, getCategoriesNumber);
router.get("/:id", authMiddleware, adminMiddleware, getCategorybyId);
router.post("/delete/:id", authMiddleware, adminMiddleware, deleteCategory);
router.post("/update/:id", authMiddleware, adminMiddleware, updateCategory);
module.exports = router;
