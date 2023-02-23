'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companies', [
      {
        title: 'AMD'
      },
      {
        title: 'Intel'
      },
      {
        title: 'Gigabyte'
      },
      {
        title: 'Palit'
      },
      {
        title: 'EliteGroup'
      },
      {
        title: 'Esonic'
      },
      {
        title: 'MSI'
      },
      {
        title: 'Kingston'
      },
      {
        title: 'Aerocool'
      },
      {
        title: 'Deepcool'
      },
      {
        title: 'Super Flower'
      },
      {
        title: 'G.Skill'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Companies', null, {}); 
  }
};