var express = require('express');
var router = express.Router();

const Book = require('../models/Book');

/* GET home page. */
router.get('/new', function (req, res, next) {

    const firstBook = new Book({
        title: 'Kolera Günlerinde Aşk'
    });

    firstBook.save((error, data) => {
        if (error)
            console.log(error)

        res.json(data);
    })
});

module.exports = router;
