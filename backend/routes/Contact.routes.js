const express = require("express");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");

const {
  createContact,
  deleteContact,
  getAllMessages,
  getMessagesNumber,
} = require("../controllers/Contact.controller");
const router = express.Router();
router.post("/create", authMiddleware, createContact);
router.post("/delete/:id", authMiddleware, adminMiddleware, deleteContact);
router.get("/", authMiddleware, adminMiddleware, getAllMessages);
router.get("/all", authMiddleware, adminMiddleware, getAllMessages);
module.exports = router;
