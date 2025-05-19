import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
  Name: String,
  Type: String,
  District: String,
  Rooms: Number,
  Price: String,
  View: String,
  ImageUrl: String
});

const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;
