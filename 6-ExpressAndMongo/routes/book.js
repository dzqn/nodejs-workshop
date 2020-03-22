var express = require('express');
var router = express.Router();

const Book = require('../models/Book');

/* GET home page. */
router.get('/new', function (req, res, next) {

    const firstBook = new Book({
        title: 'Kolera Günlerinde Aşk',
        //published:false,
        comments: [
            {message:'Çok güzel'},
            {message:'Fena Değil'}
        ],
        //date:Date(),
        metaData:{
            votes:15,
            favs:99
        }
    });

    firstBook.save((error, data) => {
        if (error)
            console.log(error)

        res.json(data);
    })
});

module.exports = router;
