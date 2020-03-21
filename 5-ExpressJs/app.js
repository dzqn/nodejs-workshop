const express = require('express');
const app = express();

app.set('view engine','pug');
app.use(express.static('public'));

app.get('/',(requset,response) => {
    response.render("index",{name:"Düzgün",surname:"Tutar"});
});

app.listen(3000,() => {
    console.log("app is started!!");
})

