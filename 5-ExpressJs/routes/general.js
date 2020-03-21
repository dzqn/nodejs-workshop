const express = require('express');

const generalRoutes = express.Router();

generalRoutes.get('/',(requset,response) => {
    response.render("index",{name:"Düzgün",surname:"Tutar"});
});

module.exports = generalRoutes;