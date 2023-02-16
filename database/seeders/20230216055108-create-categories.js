'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Процессоры', 
      },
      {
        title: 'Видеокарты'
      },
      {
        title: 'Материнские платы'
      }, 
      {
        title: 'Оперативная память'
      },
      {
        title: 'Жесткие диски',
      },
      {
        title: 'Куллера'
      }, 
      {
        title: 'Блоки питания'
      }, 
      {
        title: 'Клавиатуры'
      },
      {
        title: 'Мониторы'
      },
      {
        title: 'Мыши'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
