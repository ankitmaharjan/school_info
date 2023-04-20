'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid:{
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
       
        type: Sequelize.BIGINT(50)
      },
      updatedAt: {
      
        type: Sequelize.BIGINT(50)
      },
      is_delete:{
        defaultValue: 0,
        type: Sequelize.TINYINT
      },
      Password:{
        type: Sequelize.STRING
      }
      
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};