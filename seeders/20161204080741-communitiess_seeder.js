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
    return queryInterface.bulkInsert('communities', [
      {
        name: 'Shoes',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Writing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Photography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watches',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wallets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bags',
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
    return queryInterface.bulkDelete('communities', null, {});
  }
};
