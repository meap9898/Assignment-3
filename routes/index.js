var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});
router.get('/aboutme', function(req, res) {
  res.render('aboutme', { title: 'aboutme' });
});
router.get('/contact', function(req, res) {
  res.render('contactme', { title: 'contact me' });
});
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'projects' });
});

router.get('/heh', (req,res) => {
    res.send('Boku No Chinchin Wa Chisai Des')
})
router.get('/technition', (req,res) => {
  res.render('Computertechnition', { title: 'Computer technition' });
})

module.exports = router;
