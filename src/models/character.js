const mongoose = require('mongoose');

const Character = mongoose.model('character', {
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
  playedBy: String
});

module.exports = Character;