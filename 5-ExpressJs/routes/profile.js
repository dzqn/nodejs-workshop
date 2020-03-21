const express = require('express');
const profileRoutes = express.Router();

//helper
const isLogin = require('../helper/isLogin');

profileRoutes.get('/',isLogin, (requset, response) => {
    response.render("profile");
});

module.exports = profileRoutes;