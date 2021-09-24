const mongoose = require('mongoose');

const Book = mongoose.model("book-covers",
  {
    isbm: String,
    img: String,
    url: String
  }
);

module.exports = Book;