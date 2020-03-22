const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    published: {
        type: Boolean,
        default: false
    },
    comments: [{ message: String }],
    date: {
        type: Date,
        default: Date.now
    },
    metaData: {
        votes: Number,
        favs: Number
    }

})

module.exports = mongoose.model('book', BookSchema);