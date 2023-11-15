var express = require('express');
var router = express.Router();
let Anime = require('../models/Anime');
let AnimeController = require('../controllers/Anime')



/*read */
// get route
router.get('/', AnimeController.DisplayAnimelist);
//add
router.get('/add', AnimeController.AddAnime);
router.post('/add', AnimeController.ProcessAnime);
//display edit
router.get('/edit/:id', AnimeController.EditAnime);
router.post('/add', AnimeController.ProcessEditAnime);
// delete
router.get('/delete/:id', AnimeController.DeleteAnime);
module.exports=router;