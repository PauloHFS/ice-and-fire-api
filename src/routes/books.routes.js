const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    });
  }
});

router.get('/:isbm', async (req, res) => {
  try {
    const isbm = req.params.isbm;
    const book = await Book.find({
      isbm: isbm
    });

    res.json(book);
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    });
  }
});

module.exports = router;