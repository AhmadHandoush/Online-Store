const { User } = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (e) {
    return res.status(500).send("Internal server error!");
  }
};
const getMyPersonalInformation = async (req, res) => {
  const { user } = req;
  const userInfo = await User.findById(user._id).select("-password");
  res.json(userInfo);
};
const deleteUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    return res.json(deletedUser);
  } catch (e) {
    return res.status(500).send("Internal server error!");
  }
};
const updateUserById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
      },
      { new: true }
    );

    return res.json(updatedUser);
  } catch (e) {
    return res.status(500).send("Internal server error: ", e);
  }
};

module.exports = {
  getAllUsers,
  getMyPersonalInformation,
  deleteUserById,
  updateUserById,
};
