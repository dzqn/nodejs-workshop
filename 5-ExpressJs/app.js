const express = require('express');
const app = express();

app.set('view engine','pug');
app.use(express.static('public'));

const generalRoutes = require('./routes/general');
const profileRoutes = require('./routes/profile');

app.use('/',generalRoutes);
app.use('/profile',profileRoutes);

app.listen(3000,() => {
    console.log("app is started!!");
})

