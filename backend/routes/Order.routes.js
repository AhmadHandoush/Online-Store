const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const {
  createOrder,
  getOrdersforUserId,
} = require("../controllers/Order.controller");
const router = express.Router();

router.post("/create", authMiddleware, createOrder);
router.get("/mine", authMiddleware, getOrdersforUserId);
module.exports = router;
