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
        // associations can be defined here
      }
    }
  });
  return burgers;
};





// =============================================================
// OLD STUFF FROM THE "burger.js" FILE
// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 15 - Eat the Burger - Part 2!



// // Burger Model
// // ===============
// 'use strict';

// // EXPORT THIS MODULE TO INDEX.JS
// module.exports = function(sequelize, DataTypes) {

//   // The model is Burger, defined in sequelize
//   var Burger = sequelize.define('Burger', {
//     burger_name: DataTypes.STRING,
//     devoured: DataTypes.BOOLEAN
//   }, {
//     // Add associations (for later...)
//     classMethods: {
//       associate: function(models){
//         // re-visit this later on...
//       }
//     }
//   });
//   return Burger;
// };



