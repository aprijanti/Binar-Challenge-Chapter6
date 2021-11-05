'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface,createTable('user_game', {
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        fullname: {
          type: Sequelize.STRING,
          allowNull: false
        }
      })
  },

  down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(user_game);
  }
};
