var express = require('express');
var router = express.Router();

const Director = require('../models/Director');

//getall 
router.get('/', (req, res, next) => {
  Director.find({}, (err, data) => {
    if (err)
      res.json(err);
    res.json(data);
  });
});

//save
router.post('/', (req, res, next) => {
  const { title, category, country, year, imdb_score } = req.body;

  const director = new Director(req.body);
  const promise = director.save();
  promise.then(data => {
    res.json(data);
  }).then(err => {
    res.json(err);
  })
  
});

module.exports = router;
