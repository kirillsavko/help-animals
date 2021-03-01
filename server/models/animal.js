const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const animalSchema = new Schema({
  name: String,
  desc: String,
  img: String,
});

module.exports = mongoose.model('Animal', animalSchema);
