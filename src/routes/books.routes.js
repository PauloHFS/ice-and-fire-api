const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', async (req, res) => {
  let status_code = 500;
  let bodyResponse = {};

  try {
    const books = await Book.find({});

    if (books.length != 0) {
      status_code = 200;   
      bodyResponse = books;
    } else {
      status_code = 404;
    }

  } catch (err) {
    bodyResponse = {
      error: true,
      message: err.message
    }
  }

  res.status(status_code).send(bodyResponse);
});

router.get('/:isbm', async (req, res) => {
  let status_code = 500;
  let bodyResponse = {};

  try {
    const isbm = req.params.isbm;
    const book = await Book.find({
      isbm: isbm
    });

    if (book[0] != undefined) {
      status_code = 200;
      bodyResponse = book;
    } else {
      status_code = 404;
      bodyResponse = {
        error: true,
        message: "Not Found!"
      }
    }
    
  } catch (err) {
    bodyResponse = {
      error: true,
      message: err.message
    }
  }

  res.status(status_code).send(bodyResponse);
});

module.exports = router;