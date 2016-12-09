'use strict';
module.exports = function(sequelize, DataTypes) {
  var option = sequelize.define('option', {
    name: DataTypes.STRING,
    productUrl: DataTypes.TEXT,
    productImageUrl: DataTypes.TEXT,
    productDescription: DataTypes.TEXT,
    productRetailsPrice: DataTypes.STRING,
    numberOfVotes: DataTypes.INTEGER,
    pollId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.option.belongsTo(models.user);
        models.option.belongsTo(models.poll);
        models.option.hasMany(models.vote);
      }
    }
  });
  return option;
};
