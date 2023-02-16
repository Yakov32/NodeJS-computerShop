'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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