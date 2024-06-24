const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const {
  createOrder,
  myOrders,
  getOrdersByUserId,
  deleteOrderById,
  getOrderById,
  getAllOrders,
} = require("../controllers/Order.controller");
const router = express.Router();

router.post("/create", authMiddleware, createOrder);
router.get("/mine", authMiddleware, myOrders);
router.get("/", authMiddleware, getAllOrders);
router.get("/user/:id", authMiddleware, adminMiddleware, getOrdersByUserId);
router.get("/:id", authMiddleware, getOrderById);
router.delete("/delete/:id", authMiddleware, adminMiddleware, deleteOrderById);
module.exports = router;
