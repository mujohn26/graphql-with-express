
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Hobbies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    studentId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Students', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
    },
    title: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('hobbies')
};
