const express = require("express");
const { createProduct } = require("../controllers/Products.controller");
const adminMiddleware = require("../middlware/admin.middleware");
const authMiddleware = require("../middlware/auth.middleware");
const upload = require("../middlware/upload.middleware");
const router = express.Router();

router.post("/create", authMiddleware, adminMiddleware, createProduct);

module.exports = router;
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
