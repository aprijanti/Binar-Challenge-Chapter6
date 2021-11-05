'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('user_game_biodata',{
        history_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      time: {
        type: Sequelize.TIMESTAMP,
        allowNull: false
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'user_game', key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      biodata_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        references: {
          model:'user_game_biodata', key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('history_id');
  }
};
