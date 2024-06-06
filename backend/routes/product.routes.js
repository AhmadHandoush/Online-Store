const express = require("express");
const createProduct = require("../controllers/Products.controller");
const adminMiddleware = require("../middlware/admin.middleware");
const router = express.Router();

router.post("/create",adminMiddleware,createProduct);
