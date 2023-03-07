'use strict';

const { Model } = require('sequelize');
const config = require('./../config/config');

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
      Item.belongsTo(models.Company, {
        foreignKey: 'company_id',
        as: 'company'
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
      get(){
        const imgPath = this.getDataValue('imgPath');
        const url = `${config.appUrl}:${config.port}`;

        if(!imgPath) {
          return `${url}/public/assets/images/default-item-img.webp`;
        }

        return `${url}/public/assets/images/items/${this.getDataValue('imgPath')}`;
      }
    },

  }, {
    sequelize,
    modelName: 'Item',
  });
  
  return Item;
};

