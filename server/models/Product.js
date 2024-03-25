const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: String,
    description: {
      heading: String,
      display: String,
      processor: String,
      frontcamera: String,
      rearcamera: String,
      ram: String,
      storage: String,
      batterycap: String,
      os: String,
    },
    price: String,
    reviews: [{ type: String }],
    rating: [{ type: Number }],
    url: String,
  },
  { collection: "products" }
);

module.exports = mongoose.model("products", productSchema);
