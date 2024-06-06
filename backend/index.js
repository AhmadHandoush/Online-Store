const express = require("express");
const cors = require("cors");
require("dotenv").config();
// const { createAdminAccount } = require("./scripts/seup");
const app = express();
const { connect } = require("./configuration/dbConfig");
const PORT = process.env.PORT || 5000;
// const userRoute = require("./routes/authRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use("/user", userRoute);

const authRouter = require("./routes/authRoutes");
app.use("/auth", authRouter);
const userRouter = require("./routes/user.routes");
app.use("/users", userRouter);
app.use(cors());
// createAdminAccount();

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}`);
  connect();
});
