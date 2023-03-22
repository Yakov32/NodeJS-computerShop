'use strict';

const { Model } = require('sequelize');
const config = require('./../config/config');
const bcrypt = require('bcrypt');

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
      validate: {
        notNull: true,
        notEmpty: true,
        isEmail: {
          args: true,
          msg: 'Некорректный формат почты!',
        },
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
        len: {
          args: [6, 100],
          msg: 'Неправильный пароль. Пароль должен быть > 6 и < 100'
        }
      }
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
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeBulkCreate: hashPassword,
    }
  });
  return User;
};

const hashPassword = async (user) => {
  if(user.changed('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  return user;
};