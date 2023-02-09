'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Items', [
      {
        title: 'Видеокарта 3080 ti',
        price: 96500,
      },
      {
        title: 'Процессор Ryzen 5600x',
        price: 25000,
      },
      {
        title: 'Видеокарта 3060 ti',
        price: 40000,
      },
      {
        title: 'Материнская плата S2H B450M',
        price: 4500,
      },
      {
        title: 'Видеокарта 1660 ti',
        price: 30000,
      },
      {
        title: 'Видеокарта 1050 ti',
        price: 10000,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {});
  }
};
