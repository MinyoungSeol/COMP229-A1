var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Connect to our Contact model
var Contact = require('../models/contact');


/* GET Route for the Contact List Page - READ Operation */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(contactList);

            res.render('contact', {title: 'Contact List', ContactList: contactList});
        }
    });
});

module.exports = router;