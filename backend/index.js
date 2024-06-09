// const { createAdminAccount } = require("./scripts/seup");
// createAdminAccount();

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const { connect } = require("./configuration/dbConfig");
const productRouter = require("./routes/product.routes");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/user.routes");
const categoryRouter = require("./routes/category.routes");
const orderRouter = require("./routes/Order.routes");
const multer = require("multer");
const PORT = process.env.PORT || 5000;
const path = require("path");
const fileUpload = require("express-fileupload");

app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}`);
  connect();
});
