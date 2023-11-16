var express = require('express');
var router = express.Router();
//const { router } = require('../config/app');
let Anime = require('../models/anime');
let AnimeController = require('../controllers/anime');
/* Get route for the Bio Books list */
// Read Operation
router.get('/', AnimeController.DislayAnimelist);
/* Get route for Add Book page --> Create */
router.get('/add', AnimeController.AddAnime); 
/* Post route for Add Book page --> Create */
router.post('/add', AnimeController.ProcessAnime);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', AnimeController.EditAnime);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', AnimeController.ProcessEditAnime);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', AnimeController.DeleteAnime);
 module.exports = router;
