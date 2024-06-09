const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const {
  createCategory,
  deleteCategory,
  updateCategory,
  getAllCategories,
  getCategorybyId,
} = require("../controllers/Category.controller");

const router = express.Router();
router.post("/create", authMiddleware, adminMiddleware, createCategory);
router.get("/", authMiddleware, getAllCategories);
router.get("/:id", authMiddleware, adminMiddleware, getCategorybyId);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteCategory);
router.put("/update/:id", authMiddleware, adminMiddleware, updateCategory);
module.exports = router;
