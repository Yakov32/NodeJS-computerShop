'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category'
      });
      Item.hasMany(models.Comment, {
        foreignKey: 'item_id',
        as: 'comments'
      });
      Item.hasMany(models.Like, {
        foreignKey: 'item_id',
        as: 'likes'
      });
    }
  }
  Item.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imgPath: {
      type: DataTypes.STRING,
      allowNull: true,
    },

  }, {
    sequelize,
    modelName: 'Item',
  });
  
  return Item;
};

