'use strict';
module.exports = function(sequelize, DataTypes) {
  var option = sequelize.define('option', {
    name: DataTypes.STRING,
    productUrl: DataTypes.TEXT,
    productImageUrl: DataTypes.TEXT,
    productDescription: DataTypes.TEXT,
    productRetailsPrice: DataTypes.STRING,
    votes: DataTypes.STRING,
    pollId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return option;
};