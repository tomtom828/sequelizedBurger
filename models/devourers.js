// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!



// Burger Eater Model
// ===============
'use strict';
module.exports = function(sequelize, DataTypes) {
  var devourers = sequelize.define('devourers', {
    devourer_name: DataTypes.STRING,
    burgerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // Each of the devourers belongs to one of the burgers
        devourers.hasOne(models.burgers, { as: 'devourer_id', foreignKey: 'devourerId'}) //, foreignKeyConstraint:true });
        //devourers.hasOne(models.burgers, { foreignKey: 'burgerId'})
      }
    }
  });
  return devourers;
};