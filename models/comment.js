'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Comment.belongsTo(models.Item, {
        foreignKey: 'item_id',
        as: 'item'
      });
    }
  }
  Comment.init({
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [3, 150]
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};