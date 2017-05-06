'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    underscored    : true,
    freezeTableName: true,
    tableName      : 'user',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};