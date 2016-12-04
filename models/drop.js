'use strict';
module.exports = function(sequelize, DataTypes) {
  var drop = sequelize.define('drop', {
    name: DataTypes.STRING,
    productUrl: DataTypes.TEXT,
    productImageUrl: DataTypes.TEXT,
    productDescription: DataTypes.TEXT,
    productPrice: DataTypes.STRING,
    numberOfPurchased: DataTypes.INTEGER,
    communityId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return drop;
};
