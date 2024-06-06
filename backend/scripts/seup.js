const { User } = require("../models/User");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
  try {
    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });
    if (existingAdmin) {
      console.log("Admin account already exists ");
    } else {
      const newAdmin = new User({
        firstName: "Admin",
        lastName: "123",
        email: "admin@gmail.com",
        password: "admin",
        role: "admin",
      });
      await newAdmin.save();
      console.log("Admin account created successfully");
    }
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { createAdminAccount };
