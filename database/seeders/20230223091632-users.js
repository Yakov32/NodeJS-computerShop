'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [
    {
      email: 'user1@gmail.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: false,
    },
    {
      email: 'user2@gmail.com',
      password: bcrypt.hashSync('1234567', 10),
      isAdmin: false,
    },
    {
      email: 'user3@gmail.com',
      password: bcrypt.hashSync('12345678', 10),
      isAdmin: false,
    },
    {
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('admin123', 10),
      isAdmin: true,
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
