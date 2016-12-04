'use strict';
module.exports = function(sequelize, DataTypes) {
  var poll = sequelize.define('poll', {
    name: DataTypes.STRING,
    communityId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return poll;
};