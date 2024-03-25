const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carname: String,
    enginepower: String,
    seatingcapacity: String,
    drivetype: String,
    mileage: String,
    fuel: String,
    price: String,
  },
  { collection: "cars" }
);

module.exports = mongoose.model("cars", carSchema);
