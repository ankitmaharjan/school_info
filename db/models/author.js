'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Author.init({
    uuid: DataTypes.STRING,
    author_name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    createdAt: DataTypes.BIGINT,
    updatedAt: DataTypes.BIGINT,
    book_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};