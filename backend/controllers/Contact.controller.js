const Contact = require("../models/Contact.model");
const createContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const createdBrand = await Contact.create({ name, email, phone, message });
    res.json({
      message: "Message sent Successfully",
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error!");
  }
};
const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    return res.json({ message: "Message deleted successfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("Internal server error!");
  }
};

const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json({ messages: messages });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};

const getMessagesNumber = async (req, res) => {
  try {
    const messages = await Contact.countDocuments();
    res.json({
      messages: messages,
    });
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
};

module.exports = {
  createContact,
  deleteContact,
  getAllMessages,
  getMessagesNumber,
};
