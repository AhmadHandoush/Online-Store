const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signupUser(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;

    //  input validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists!" });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      role: "user",
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);

    res
      .status(201)
      .json({ message: "User created successfully", user: savedUser, token });
  } catch (err) {
    console.error("Error during user signup:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "username/password incorrect" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "username/password incorrect" });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ user, token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Internal server error!");
  }
};

module.exports = { signupUser, login };
