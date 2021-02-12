'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class keyword extends Model {
    static associate(models) {
      keyword.belongsToMany(models.post, {
        through: 'postKeywords',
        foreignKey: 'keywordId',
        as: 'posts',
      });
    }
  }
  keyword.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'keyword',
    }
  );
  return keyword;
};
