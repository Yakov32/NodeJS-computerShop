'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment, {
        foreignKey: 'user_id',
        as: 'comments'
      });
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    password: {
    type: DataTypes.STRING,
    allowNull: false,
    },

    imgPath: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};