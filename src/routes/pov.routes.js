const express = require('express');
const router = express.Router();
const PovCharacter = require("../models/pov_character");

router.get('/', async (req, res) => {
  let status_code = 500;
  let bodyResponse = {};

  try {
    const id = req.params.id;
    const characters = await PovCharacter.find({});

    if (characters.length != 0 ) {
      status_code = 200;
      bodyResponse = characters;
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

router.get('/:id', async (req, res) => {
  let status_code = 500;
  let bodyResponse = {};

  try {
    const id = req.params.id;
    const character = await PovCharacter.findById(id);

    if (character.length != 0) {
      status_code = 200;
      bodyResponse = character;
    } else {
      status_code = 400;
    }

  } catch (err) {
    bodyResponse = {
      error: true,
      message: err.message
    }
  }

  res.status(status_code).send(bodyResponse);
});

router.get("/:id/books", async (req, res) => {
  let status_code = 500;
  let bodyResponse = {};

  try {
    const id = req.params.id;
    const character = await PovCharacter.findById(id);

    if (character.length != 0) {
      status_code = 200;
      bodyResponse = {
        books: character['books'],
        povBooks: character['povBooks']
      }
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

module.exports = router;