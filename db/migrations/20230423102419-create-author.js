'use strict';
/**  @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Authors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type: Sequelize.STRING
      },
      author_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.BIGINT
      },
      updatedAt: {
        type: Sequelize.BIGINT
      },
      book_id: {
        type: Sequelize.INTEGER
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Authors');
  }
};