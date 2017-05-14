'use strict';
module.exports = function(sequelize, DataTypes) {
  var user_info = sequelize.define('user_info', {
    user_id: DataTypes.INTEGER,
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    underscored: true,
    freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_info;
};