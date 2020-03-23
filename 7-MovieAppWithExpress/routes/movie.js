var express = require('express');
var router = express.Router();

const Movie = require('../models/Movie');

// Get All datas
router.get('/', (req, res, next) => {
  Movie.find({}, (err, data) => {
    if (err)
      res.json(err);
    res.json(data);
  });
});

router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id, (err, data) => {
    //app.js altındaki error midleware e gider
    if (!data) {
      next({ message: "Kayıt bulunamadı!" })
    }

    res.json(data);
  });
})

// Save Data
router.post('/', (req, res, next) => {
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

router.put('/:id', (req, res, next) => {
  const promise = Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true // Güncellenen satanın en son halini döner
    }
  );
  promise.then(function (data) {
    res.json(data);
  }).catch(function (err) {
    next({ message: "Hatalı İşlem!" });
  })
});


module.exports = router;
