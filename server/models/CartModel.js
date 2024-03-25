const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    username: String,
    cartInfo: [
      {
        productId: Number,
        quantity: Number,
        productTitle: String,
        productUrl: String,
        price: String,
      },
    ],
  },
  { collection: "cart" }
);

module.exports = mongoose.model("cart", cartSchema);
