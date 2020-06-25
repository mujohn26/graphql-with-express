'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.DATE,
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};