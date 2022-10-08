/*
    file name: app.css
    Name: Minyoung Seol
    Student ID: 301203510
    Date: Oct 8, 2022
*/

var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me!' });
});

module.exports = router;
