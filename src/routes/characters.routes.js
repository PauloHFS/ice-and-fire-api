const express = require('express');
const router = express.Router();
const Pov_character = require('../models/pov_character');

/*
router.get("/", async (req, res) => {
  
});
*/

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

module.exports = router;