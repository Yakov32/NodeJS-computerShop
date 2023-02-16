'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Items', 'category_id', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Categories',
        },
        key: 'id'
      },
      allowNull: false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Items', 'category_id');
  }
};
