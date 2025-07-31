
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  priceInINR: Number,
  gender: String
});

module.exports = mongoose.model('Product', ProductSchema);
