'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded burgers to database (note that the date needs to be manually added here)
    return queryInterface.bulkInsert('burgers', [
      {burger_name: "Big Mac", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Whooper", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Cheezburger", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Baconator", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Quarter Pounder", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "McRoyal", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Double Double", devoured: false, createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  down: function (queryInterface, Sequelize) {
    
    // Remove the seeded burgers (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('burgers', null, {truncate : true});
    
  }

};
