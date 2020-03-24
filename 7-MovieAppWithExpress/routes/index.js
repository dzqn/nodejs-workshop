var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const User = require('../models/User');

router.post('/register',(req,res,nex)=> {
  const {username,password} = req.body;
  const user = new User({
    username,
    password
  })

  const promise = user.save();

  promise.then(data => {
    res.json(data);
  })

})

module.exports = router;
