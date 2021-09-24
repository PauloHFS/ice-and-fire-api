const mongoose = require('mongoose');

const Pov_character = mongoose.model('pov_characters', {
  url: String,
  name: String,
  gender: String,
  culture: String,
  born: String,
  titles: String,
  allegiances: String,
  books: String,
  povBooks: String,
  tvSeries: String,
  playedBy: String,
  id: Number
});

module.exports = Pov_character;