var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res, nex) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10).then(hash => {
    const user = new User({
      username,
      password: hash
    });
    const promise = user.save();
    promise.then(data => {
      res.json(data);
    })
  });
});

router.post('/authendicate', (request, response) => {
  const { username, password } = request.body;

  User.findOne({
    username
  }, (err, user) => {
    if (err)
      throw err;
    if (!user) {
      response.json({
        status: false,
        message: "User not found"
      });
    }
    else {
      bcrypt.compare(password, user.password).then((result) => {
        if (!result) {
          response.json({
            status: false,
            message: "password Wrong"
          });
        } else {
          const payload = {
            username
          };
          //request.app.get('api_secret_key') tanımladığımız global değişkeni çektik
          const token = jwt.sign(payload, request.app.get('api_secret_key'), {
            expiresIn: 720 // 12 saat
          });
          response.json({
            status: true,
            token: token
          })
        }
      });
    }
  })
});

module.exports = router;
