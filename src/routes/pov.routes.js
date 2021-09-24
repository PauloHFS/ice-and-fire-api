const express = require('express');
const router = express.Router();
const PovCharacter = require("../models/pov_character");

router.get('/', async (req, res) => {
  try {
    const id = req.params.id;
    const character = await PovCharacter.find({});

    res.json(character);
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const character = await PovCharacter.findById(id);

    res.json(character);
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    })
  }
});

router.get("/:id/books", async (req, res) => {
  try {
    const id = req.params.id;
    const character = await PovCharacter.findById(id);

    res.json({
      books: character['books'],
      povBooks: character['povBooks']
    });
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    });
  }
});

module.exports = router;