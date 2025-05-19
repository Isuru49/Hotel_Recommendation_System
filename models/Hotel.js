const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  Name: String,
  Type: String,
  District: String,
  Rooms: Number,
  Price: String,
  View: String,
  ImageUrl: String
});

module.exports = mongoose.model('Hotel', hotelSchema);
