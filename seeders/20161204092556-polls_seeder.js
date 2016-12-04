'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('polls', [
      {
        name: 'Leather Messenger Bags',
        communityId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Best Adidas shoe to get from Col-Deal.',
        communityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Best Statement Watches',
        communityId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'oppermann leather wallet',
        communityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chester Mox #53 Compact Bi-fold Horween Shell Cordovan Dark Green',
        communityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Loafers',
        communityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('polls', null, {});
  }
};
