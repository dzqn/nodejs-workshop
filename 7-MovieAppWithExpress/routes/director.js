var express = require('express');
var router = express.Router();

const Director = require('../models/Director');

//getall 
router.get('/', (req, res, next) => {
  const promise = Director.aggregate([
    {
      $lookup: {
        from: "movies",
        localField: "_id",
        foreignField: "director_id",
        as: "filmler"
      }
    },
    {
      $unwind: {
        path: "$filmler",
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $group: {
        _id: {
          _id: "$_id",
          name: "$name",
          surname: "$surname",
          bio: "$bio"
        },
        filmler: {
          $push: "$filmler"
        }
      }
    }
  ]);

  promise.then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })

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
