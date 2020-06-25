'use strict';
module.exports = (sequelize, DataTypes) => {
  const hobbies = sequelize.define('Hobbies', {
    studentId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  hobbies.associate = function(models) {
    // associations can be defined here
  };
  return hobbies;
};