// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!



// Node Dependencies
var express = require('express');
var router = express.Router();
var models = require('../models'); // Pulls out the Burger Models


// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();


// Create routes
// ----------------------------------------------------

// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});



// Index Page (render all burgers to DOM)
router.get('/index', function (req, res) {

  // Sequelize Query to get all burgers from database
  models.burgers.findAll({
   include: [{model: models.devourers, as: 'devourer_id'}]
  }).then(function(data){

// User.findAll({
//   include: [{
//     model: Project,
//     through: {
//       attributes: ['createdAt', 'startedAt', 'finishedAt'],
//       where: {completed: true}
//     }
//   }]
// });
//console.log(data)

    var hbsObject = { burgers: data };
    // console.log(data);
    res.render('index', hbsObject);
// res.json(data)
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

  // Create a new burger devourer
  models.devourers.create({
    devourer_name: req.body.burgerEater
  })

  // Then, select the eaten burger by it's id
  .then(function(newDevourer){

    models.burgers.findOne( {where: {id: req.params.id} } )

    // Then, use the returned burger object to...
    .then(function(eatenBurger){
      console.log('----------- new eater ---------------')
      console.log(newDevourer)
            console.log('----------- new burger ---------------')
      console.log(eatenBurger)
      // 1 - Associate the devourer with the burger 
      //newDevourer.setBurger(eatenBurger)
     // eatenBurger.setDevourer(newDevourer)
      // 2 - Update the burger's status to devoured
      eatenBurger.update({
        devoured: true,
      })

      // Then, the burger is devoured, so refresh the page
      .then(function(){
        res.redirect('/index');
      });

    });

  });

});

// ----------------------------------------------------


// Export routes
module.exports = router;