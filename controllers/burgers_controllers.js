// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!



// Node Dependencies
var express = require('express');
var router = express.Router();
var Burger = require('../models')["Burger"]; // Pulls out the Burger Model


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {

  // // Sequelize Query to get all burgers from database
  Burger.findAll({attributes: ['id', 'burger_name', 'devoured', 'date']}).then(function(data){

    var hbsObject = { burgers: data };
    console.log(data);
    res.render('index', hbsObject);

  })

});


// Create a New Burger
// router.post('/burger/create', function (req, res) {
//   burger.insertOne(req.body.burger_name, function() {
//     res.redirect('/index');
//   });
// });


// Devour a Burger
// router.post('/burger/eat/:id', function (req, res) {
//   burger.updateOne(req.params.id, function() {
//     res.redirect('/index');
//   });
// });
// ----------------------------------------------------


// Export routes
module.exports = router;