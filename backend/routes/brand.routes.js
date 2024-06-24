const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const {
  createBrand,updateBrand,deleteBrand,getAllBrands,getBrandById
} = require("../controllers/Brand.controller");

const router = express.Router();
router.post("/create", authMiddleware, adminMiddleware, createBrand);
router.get("/", authMiddleware, getAllBrands);
router.get("/:id", authMiddleware, getBrandById);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteBrand);
router.put("/update/:id", authMiddleware, adminMiddleware, updateBrand);
module.exports = router;