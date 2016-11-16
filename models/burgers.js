// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!



// Burger Model
// ===============
'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    devourerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // The burger has a 1 to 1 relationship, so nothing needs to be specified here
        // burgers.hasOne(models.devourers);
        burgers.belongsTo(models.devourers, { as: 'devourer_id', foreignKey: 'burgerId'}) //, foreignKeyConstraint:true })
        //burgers.belongsTo(models.devourers, { foreignKey: 'devourerId'})
      }
    }
  });
  return burgers;
};
