'use strict';
module.exports = function(sequelize, DataTypes) {
  var community = sequelize.define('community', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return community;
};