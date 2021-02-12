'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.post, {
        foreignKey: 'userId',
        as: 'posts',
      });

      user.hasOne(models.avatar, {
        foreignKey: 'userId',
        as: 'avatar',
      });
    }
  }
  user.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'user',
      // freezeTableName: true,
      // timestamps: false,
      // first_name
      // underscored: true,
      // tableName: "myusers",
      // paranoid: true,
    }
  );
  return user;
};
