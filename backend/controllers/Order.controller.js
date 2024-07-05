const Order = require("../models/Order.model");
const { User } = require("../models/User");
const Product = require("../models/Product.model");

const createOrder = async (req, res) => {
  try {
    const user_id = req.user._id;
    const { products, total_price, client_address } = req.body;

    //  validation
    if (!products || !total_price || !client_address) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const productDetails = [];

    for (const product of products) {
      const productData = await Product.findById(product.product_id);
      if (!productData) {
        return res
          .status(404)
          .json({ message: `Product not found: ${product.product_id}` });
      }

      const productDetail = {
        product_id: product.product_id,
        quantity: product.quantity,
        price: productData.price,
      };
      productDetails.push(productDetail);
    }

    const order = new Order({
      user_id,
      products: productDetails,
      total_price,
      client_address,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Internal server error");
  }
};
const myOrders = async (req, res) => {
  const user_id = req.user._id;
  try {
    const orders = await Order.find({ user_id });
    return res.status(200).json({ orders: orders });
  } catch (err) {
    res.satus(500).send("Internal server error");
  }
};
const getOrdersByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Order.find({ user_id: id });
    return res.status(200).json({ orders: orders });
  } catch (err) {
    res.satus(500).send("Internal server error");
  }
};
const deleteOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    return res.status(200).json({ message: "Product deleted succcessfully" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).send("Internal server error!");
  }
};
const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    return res.status(200).json(order);
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ orders: orders });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
};
const getOrdersNumber = async (req, res) => {
  try {
    const orders = await Order.countDocuments();
    res.json({
      orders: orders,
    });
  } catch (error) {
    res.status(500).send("Internal server error!");
  }
};

module.exports = {
  createOrder,
  myOrders,
  getOrdersByUserId,
  deleteOrderById,
  getOrderById,
  getAllOrders,
  getOrdersNumber
};
