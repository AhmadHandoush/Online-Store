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
const brandRouter = require("./routes/brand.routes");
const contactRouter = require("./routes/Contact.routes");
const multer = require("multer");
const PORT = process.env.PORT || 5000;
const path = require("path");
const fileUpload = require("express-fileupload");
const { createAdminAccount } = require("./scripts/seup");
// createAdminAccount();

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/brand", brandRouter);
app.use("/contact", contactRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}`);
  connect();
});
