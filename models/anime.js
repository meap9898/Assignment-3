let mongoose = require('mongoose');

// create model for anime
let animeModel = mongoose.Schema({

    title: String,
    studio: String,
    year: Number
},
{
    collection:"anime"
});
module.exports = mongoose.model('Anime',animeModel);
