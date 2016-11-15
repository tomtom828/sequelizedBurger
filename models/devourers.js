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
        // Each of the devourers belongs to one of the burgers
        devourers.hasOne(models.burgers, { as: 'devourer_id', foreignKey: 'id' , foreignKeyConstraint:true });
      }
    }
  });
  return devourers;
};