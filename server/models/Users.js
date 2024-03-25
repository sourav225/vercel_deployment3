const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    number: Number,
    address: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", userSchema);
