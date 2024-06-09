const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const {
  createOrder,
  myOrders,
  getOrdersByUserId,
} = require("../controllers/Order.controller");
const router = express.Router();

router.post("/create", authMiddleware, createOrder);
router.get("/mine", authMiddleware, myOrders);
router.get("/:id", authMiddleware, adminMiddleware, getOrdersByUserId);
module.exports = router;
