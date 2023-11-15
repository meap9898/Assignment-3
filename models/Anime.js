let mongoose = require('mongoose');

let AnimeModel = mongoose.Schema({
    _id: Number,
    title: String,
    Studio: String,
    year: Number

},
{
    collection: "Anime"
});
module.exports = mongoose.model('Anime', AnimeModel);