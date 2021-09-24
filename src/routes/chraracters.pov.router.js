const express = require('express');
const router = express.Router();
const Pov_character = require('../models/pov_character');

//TODO entender o erro
router.get('/:id/books', async (req, res) => {
  try {
    const id = req.params.id;
    const character = await Character.findById(id);

    res.json({
      books: character[books],
      povBooks: character[povBooks]
    });
  } catch (err) {
    res.json({
      error: true,
      message: res.message
    });
  }
});

//TODO ERROR
router.get('/pov', async (req, res) => {
  try {
    const pov_characters = await Pov_character.find({});

    res.json(pov_characters);
  } catch (err) {
    res.json({
      error: true,
      message: res.message
    });
  }
});

router.get("/pov/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const pov_character = await Pov_character.find({
      id: id
    });

    res.json(pov_character);
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    });
  }
});

router.get("/pov/:id/books", async (req, res) => {
  try {
    const id = req.params.id;
    const pov_character = await Pov_character.find({
      id: id
    });

    //TODO: ENTENDER PQ ISSO NÂO Tá FUNCIONANDO
    res.json({
      books: pov_character['books'],
      povBooks: pov_character['povBooks']
    });
  } catch (err) {
    res.json({
      error: true,
      message: err.message
    });
  }
});

module.exports = router;