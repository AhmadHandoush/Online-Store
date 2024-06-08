const express = require("express");
const {
  getAllUsers,
  getMyPersonalInformation,
  deleteUserById,
  updateUserById,
} = require("../controllers/user.controller");
const authMiddleware = require("../middlware/auth.middleware");
const adminMiddleware = require("../middlware/admin.middleware");
const router = express.Router();
router.get("/", authMiddleware, adminMiddleware, getAllUsers);
router.get("/me", authMiddleware, getMyPersonalInformation);
router.delete("/:id", authMiddleware, deleteUserById);
router.put("/:id", authMiddleware, updateUserById);

module.exports = router;
