'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      productUrl: {
        type: Sequelize.TEXT
      },
      productImageUrl: {
        type: Sequelize.TEXT
      },
      productDescription: {
        type: Sequelize.TEXT
      },
      productRetailsPrice: {
        type: Sequelize.STRING
      },
      votes: {
        type: Sequelize.STRING
      },
      pollId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('options');
  }
};