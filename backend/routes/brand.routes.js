const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrands,
  getBrandById,
  getBrandsNumber,
} = require("../controllers/Brand.controller");

const router = express.Router();
router.post("/create", authMiddleware, adminMiddleware, createBrand);
router.get("/", authMiddleware, getAllBrands);
router.get("/brands/number", authMiddleware, getBrandsNumber);
router.get("/:id", authMiddleware, getBrandById);
router.post("/delete/:id", authMiddleware, adminMiddleware, deleteBrand);
router.post("/update/:id", authMiddleware, adminMiddleware, updateBrand);
module.exports = router;
