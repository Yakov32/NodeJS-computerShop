'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Items', 'description', {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
        }, {transaction: t}),
        queryInterface.addColumn('Items', 'imgPath', {
          type: Sequelize.DataTypes.STRING,
          allowNull: true
        }, {transaction: t}),
      ])
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Items', 'description', {transaction: t}),
        queryInterface.removeColumn('Items', 'imgPath', {transaction: t}),
      ])
    })
  }
};
