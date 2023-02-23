'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Comments', [
    {
      text: 'Хорошая видеокарта, работает 2 года, всем доволен',
      user_id: 1,
      item_id: 4,
    },
    {
      text: 'Очень дорого еще и сломалась, был недоволен, вернул',
      user_id: 3,
      item_id: 5
    },
    {
      text: 'Купил другу, один кулер плохо крутит, заменил, в остальном хорошо',
      user_id: 2,
      item_id: 6,
    },
    {
      text: 'Мощный процессор да еще и не очень дорогой, пасту купил в этом же магазине',
      user_id: 1,
      item_id: 7,
    },
    {
      text: 'Плохая материнка, сдохла через 2 недели, пошёл возвращать, отказали, плохой магазин',
      user_id: 2,
      item_id: 10,
    },
    {
      text: 'Бюджетная видеокарта, внуку в доту поиграть самое то, доволен',
      user_id: 3,
      item_id: 12,
    },
   ]
   )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};