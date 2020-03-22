mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    director_id: Schema.Types.ObjectId,
    date:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model('movie',MovieSchema);