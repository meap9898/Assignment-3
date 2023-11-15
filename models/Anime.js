let mongoose = require('mongoose');

// create a model class
let animeModel = mongoose.Schema({

    title: String,
    studio: String,
    year: Number
},
{
    collection:"anime"
});
module.exports = mongoose.model('Anime',animeModel);
