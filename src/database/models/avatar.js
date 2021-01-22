"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class avatar extends Model {
    static associate(models) {
      avatar.belongsTo(models.user, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  avatar.init(
    {
      path: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "avatar",
    }
  );
  return avatar;
};
