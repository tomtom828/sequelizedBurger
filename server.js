// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!



// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models



// Create routes
// ----------------------------------------------------

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});



// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {

  // Sequelize Query to get all burgers from database
  models.burgers.findAll({}).then(function(data){

    var hbsObject = { burgers: data };
    // console.log(data);
    res.render('index', hbsObject);

  })

});



// Create a New Burger
router.post('/burger/create', function (req, res) {

  // Sequelize Query to add new burger to database
  models.burgers.create(
    {
      burger_name: req.body.burger_name,
      devoured: false
    }
  ).then(function(){
    // After the burger is added to the database, refresh the page
    res.redirect('/index');
  });

});



// Devour a Burger
router.post('/burger/eat/:id', function (req, res) {

  // Globalize the current burger
  var burger;

  // First, use a Sequelize Query to find the burger with the selected id
  models.burgers.findOne( {where: {id: req.params.id} }).then(function(burger){
    
    console.log(req.body.burgerEater)
    // Then, update its status to devoured
    burger.update({
      devoured: true,
    })
  })

  .then(function(){
    return models.Devourers.create({
      devourer_name: req.body.burgerEater
    })
  })

  .then(function(devourer){
    burger.addDevourers(devourer);
  })

  // After the burger is devoured, refresh the page
  .then(function(){
    res.redirect('/index');
  });

});

// ----------------------------------------------------


// Export routes
module.exports = router;