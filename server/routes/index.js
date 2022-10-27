/*
    file name: app.css
    Name: Minyoung Seol
    Student ID: 301203510
    Date: Oct 8, 2022
*/

var express = require('express');
var router = express.Router();

var indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact me page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
