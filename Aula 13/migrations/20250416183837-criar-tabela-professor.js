'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("professor", {
      matricula: {
        type: Sequelize.CHAR(8),
        primaryKey: true,

      },
      Nome: {
        type: Sequelize.STRING(100),
        alloNull: false,

      },
      email: {
        type: Sequelize.STRING(100),
        alloNull: false,
        unique: true,

      },
      senha: {
        type: Sequelize.CHAR(100),
        alloNull: false,

      }

    });
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.dropTable("professor");
     
  },
};
