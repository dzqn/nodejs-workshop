const mongoose = require('mongoose');

module.exports= () => {
    mongoose.connect('mongodb://localhost/MovieDB', { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('open',() => {
        console.log('Db bağlantısı gerçekleşti');
    });

    mongoose.connection.on('error',() => {
        console.log('Db bağlantısı sırasında hata oluştu!!');
    });

    mongoose.promise = global.Promise;
}