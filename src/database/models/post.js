"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(models) {
      post.belongsTo(models.user, {
        foreignKey: "userId",
        as: "user",
      });

      post.belongsToMany(models.keyword, {
        through: "postKeywords",
        foreignKey: "postId",
        as: "keywords",
      });
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      slug: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
