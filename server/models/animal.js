const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: String,
  desc: String,
  img: String,
  age: Number,
});

module.exports = mongoose.model('Animal', animalSchema);
