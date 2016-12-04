'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('drops', {
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
      productPrice: {
        type: Sequelize.STRING
      },
      numberOfPurchased: {
        type: Sequelize.INTEGER
      },
      communityId: {
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
    return queryInterface.dropTable('drops');
  }
};
