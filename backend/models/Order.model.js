const mongoose = require("mongoose");

// product schema
const productSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

// order schema
const orderSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [productSchema],
  total_price: { type: Number, required: true },
  client_address: { type: String, required: true },
});
orderSchema.pre("save", async function (next) {
  const order = this;
  const productUpdates = [];

  for (const product of order.products) {
    productUpdates.push({
      updateOne: {
        filter: { _id: product.product_id },
        update: { $inc: { quantity: -product.quantity } },
      },
    });
  }

  //  update product quantities
  await mongoose.model("Product").bulkWrite(productUpdates);

  next();
});

module.exports = mongoose.model("Order", orderSchema);
