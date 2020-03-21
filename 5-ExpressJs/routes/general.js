const express = require('express');
const generalRoutes = express.Router();

//helper
const isLogin = require('../helper/isLogin');

generalRoutes.get('/', (requset, response) => {
    response.render("index", { name: "Düzgün", surname: "Tutar" });
});

module.exports = generalRoutes;