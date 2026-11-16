var express = require('express');
//Create an Express router to handle page requests
var router = express.Router();

/* Display index.ejs when visitors open the main URL */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* Allow /home to display the same Home page */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About Me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

//Export the router for use in app.js
module.exports = router;

