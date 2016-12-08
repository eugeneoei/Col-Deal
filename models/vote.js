'use strict';
module.exports = function(sequelize, DataTypes) {
  var vote = sequelize.define('vote', {
    userId: DataTypes.INTEGER,
    optionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.vote.belongsTo(models.user);
        models.vote.belongsTo(models.option);
      }
    }
  });
  return vote;
};
