'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Items', 'company_id', {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'Companies'
        },
        key: 'id'
      },
      allowNull: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Items', 'company_id');
  }
};
