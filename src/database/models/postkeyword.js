'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postKeyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  postKeyword.init({
    postId: DataTypes.INTEGER,
    keywordId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'postKeyword',
  });
  return postKeyword;
};