'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};