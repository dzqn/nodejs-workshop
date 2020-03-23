var express = require('express');
var router = express.Router();

const Movie = require('../models/Movie');

//getall 
router.get('/', (req, res, next) => {
  Movie.find({}, (err, data) => {
    if (err)
      res.json(err);
    res.json(data);
  });
});

//get top 10
router.get('/top10', (req, res, next) => {
  const promise = Movie.find({}).sort({ "imdb_score": -1 }).limit(10);
  promise.then(data => {
    res.json(data);

  }).catch(err => {
    res.json(err);
  })
});

//getbyid
router.get('/:id', (req, res, next) => {
  Movie.findById(req.params.id, (err, data) => {
    //app.js altındaki error midleware e gider
    if (!data) {
      next({ message: "Kayıt bulunamadı!" })
    }

    res.json(data);
  });
})

//save
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

//update
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

//delete
router.delete('/:id', (req, res, next) => {
  const promise = Movie.findByIdAndRemove(req.params.id);
  promise.then((data) => {
    if (!data)
      next({ message: "Kayıt bulunamadı!" });
    res.json({ status: 200 });
  }).catch(err => {
    res.json(err);
  })
})


module.exports = router;
