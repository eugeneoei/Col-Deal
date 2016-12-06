'use strict';
module.exports = function(sequelize, DataTypes) {
  var drop = sequelize.define('drop', {
    name: DataTypes.STRING,
    productUrl: DataTypes.TEXT,
    productImageUrl: DataTypes.TEXT,
    productImageUrlDrop: DataTypes.TEXT,
    productDescription: DataTypes.TEXT,
    productPrice: DataTypes.STRING,
    numberOfPurchased: DataTypes.INTEGER,
    communityId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.drop.belongsTo(models.community);
        models.drop.belongsTo(models.user);
      }
    }
  });
  return drop;
};
