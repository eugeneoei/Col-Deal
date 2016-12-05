'use strict';
module.exports = function(sequelize, DataTypes) {
  var poll = sequelize.define('poll', {
    name: DataTypes.STRING,
    communityId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.poll.belongsTo(models.community);
        models.poll.belongsTo(models.user);
        models.poll.hasMany(models.option);
      }
    }
  });
  return poll;
};
