var express = require('express');
var router = express.Router();

const Movie = require('../models/Movie');

// Get All datas
router.get('/', function (req, res, next) {
  Movie.find({}, (err, data) => {
    if (err)
      res.json(err);
    res.json(data);
  });
});

// Save Data
router.post('/', function (req, res, next) {
  const { title, category, country, year, imdb_score } = req.body;

  const movie = new Movie({
    title: title,
    category: category,
    country: country,
    year: year,
    imdb_score: imdb_score
  });

  movie.save((err, data) => {
    if (err)
      res.json(err);

    res.json(data)
  })
});


module.exports = router;
