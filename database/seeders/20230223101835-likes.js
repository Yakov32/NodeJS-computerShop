'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [
      {
        user_id: 1,
        item_id: 4,
      },
      {
        user_id: 2,
        item_id: 4,
      },
      {
        user_id: 3,
        item_id: 4,
      },
      {
        user_id: 3,
        item_id: 5
      },
      {
        user_id: 2,
        item_id: 6,
      },
      {
        user_id: 1,
        item_id: 6,
      },
      {
        user_id: 1,
        item_id: 7,
      },
      {
        user_id: 2,
        item_id: 10,
      },
      {
        user_id: 3,
        item_id: 12,
      },
     ]
     )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  }
};