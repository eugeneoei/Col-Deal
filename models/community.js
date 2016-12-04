'use strict';
module.exports = function(sequelize, DataTypes) {
  var community = sequelize.define('community', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.community.hasMany(models.drop);
        models.community.hasMany(models.poll);
      }
    }
  });
  return community;
};
