// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!



// Burger Eater Model
// ===============
'use strict';
module.exports = function(sequelize, DataTypes) {
  var devourers = sequelize.define('devourers', {
    devourer_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // This does not need to be included, the hasOne() function in the burger model takes care of it
        // devourers.belongsTo(models.burgers);
      }
    }
  });
  return devourers;
};