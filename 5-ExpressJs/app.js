const express = require('express');
const app = express();

app.set('view engine','pug');

app.get('/',(requset,response) => {
    response.render("index");
});

app.listen(3000,() => {
    console.log("app is started!!");
})

