'use strict';
/** @type {import('sequelize-cli').Migration}  */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      book_name: {
        type: Sequelize.STRING
      },
      uuid: {
        type: Sequelize.STRING
      },
      publisher: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      
      created_at: {
       
        type: Sequelize.BIGINT(50)
      },
      updated_at: {
        
        type: Sequelize.BIGINT(50)
      },
      teacher_id: {
        type: Sequelize.INTEGER
      },
      student_id: {
        type: Sequelize.INTEGER
      },
      author_id: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books');
  }
};