// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!



// Burger Model
// ===============
'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // Each of the burgers has one of the devourers associated with it (key is stored on the devourer)
        burgers.hasOne(models.devourers)
      }
    }
  });
  return burgers;
};
