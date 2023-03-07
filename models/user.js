'use strict';

const { Model } = require('sequelize');
const config = require('./../config/config');

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
      User.hasMany(models.Like, {
        foreignKey: 'user_id',
        as: 'likes'
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
      get(){
        const imgPath = this.getDataValue('imgPath');
        const url = `${config.appUrl}:${config.port}`;

        if(!imgPath) {
          return `${url}/public/assets/images/default-user-img.png`;
        }

        return `${url}/public/assets/images/items/${this.getDataValue('imgPath')}`;
      }
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