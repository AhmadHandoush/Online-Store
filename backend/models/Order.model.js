const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.types.ObjectId,
      ref: "Product",
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total_price: { type: Number, required: true },
  client_address: { type: String, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
