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
        title: 'Видеокарта MSI GeForce 210',
        price: 3500,
      },
      {
        title: 'Видеокарта Palit GeForce GT 710 Silent LP',
        price: 4000,
      },
      {
        title: 'Видеокарта Palit GeForce RTX 3070 Ti GamingPro',
        price: 56000,
      },
      {
        title: 'Видеокарта GIGABYTE GeForce RTX 3070 Ti GAMING OC',
        price: 60000,
      },
      {
        title: 'Видеокарта Palit GeForce RTX 4070 Ti GameRock Classic',
        price: 81000,
      },
      {
        title: 'Видеокарта GIGABYTE GeForce RTX 3060 Ti GAMING OC (LHR)',
        price: 44000,
      },
      {
        title: 'Процессор Ryzen 5600x',
        price: 25000,
      },
      {
        title: 'Видеокарта GIGABYTE GeForce RTX 3060 Ti GAMING [GV-N306TGAMING-8GD]',
        price: 69500
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
      {
        title: 'Процессор Intel Core i5-12400F OEM',
        price: 14399
      },
      {
        title: 'Процессор AMD Ryzen 5 3600 OEM',
        price: 9200,
      },
      {
        title: 'Процессор AMD Ryzen 7 5800X OEM',
        price: 21999,
      },
      {
        title: 'Процессор Intel Core i5-10400F OEM',
        price: 9500,
      },
      {
        title: 'Процессор Intel Core i7-12700K OEM',
        price: 31000,
      },
      {
        title: 'Процессор Intel Core i9-10900X BOX',
        price: '63000',
      },
      {
        title: 'Процессор Intel Core i9-10940X OEM',
        price: 70000,
      },
      {
        title: 'Процессор Intel Celeron G5905 BOX',
        price: 3400,
      },
      {
        title: 'Процессор Intel Celeron G4900 OEM',
        price: 3900,
      },
      {
        title: 'Материнская плата GIGABYTE B550 AORUS ELITE V2',
        price: 13200,
      },
      {
        title: 'Материнская плата GIGABYTE Z690 GAMING X DDR4',
        price: 17000,
      },
      {
        title: 'Материнская плата MSI MAG Z690 TOMAHAWK WIFI',
        price: 22000,
      },
      {
        title: 'Материнская плата GIGABYTE B550M DS3H',
        price: 10000,
      },
      {
        title: 'Материнская плата Elitegroup GLKD-I2-N4020',
        price: 4500,
      },
      {
        title: 'Материнская плата Esonic G31CHL3',
        price: 3000,
      },
      {
        title: 'Материнская плата MSI MEG X670E ACE',
        price: 72000,
      },
      {
        title: 'Материнская плата MSI MEG X670E GODLIKE',
        price: 123000,
      },
      {
        title: 'Материнская плата GIGABYTE Z790 AORUS MASTER',
        price: 49000,
      },
      {
        title: 'Оперативная память AMD Radeon R5 Entertainment Series 2 ГБ',
        price: 650,
      },
      {
        title: 'Оперативная память AMD Radeon R3 Value Series 4 ГБ',
        price: 800,
      },
      {
        title: 'Оперативная память Kingston FURY Beast Black 16 ГБ',
        price: 4400,
      },
      {
        title: 'Оперативная память AMD Radeon R9 Gamer Series 16 ГБ',
        price: 3400,
      },
      {
        title: 'Оперативная память Kingston FURY Beast Black 32 ГБ',
        price: 12000,
      },
      {
        title: 'Оперативная память G.Skill AEGIS 32 ГБ',
        price: 6600,
      },
      {
        title: 'Оперативная память Kingston FURY Beast Black [KF432C16BBK2/32] 32 ГБ',
        price: 7700,
      },
      {
        title: 'Оперативная память G.Skill TRIDENT Z RGB 128 ГБ',
        price: 31500,
      },
      {
        title: 'Оперативная память Kingston FURY Renegade RGB 128 ГБ',
        price: 33000,
      },
      {
        title: 'Блок питания ExeGate AAA350',
        price: 900,
      },
      {
        title: 'Блок питания Accord ACC-350W-12',
        price: 1200,
      },
      {
        title: 'Блок питания AeroCool VX PLUS 500W',
        price: 2150,
      },
      {
        title: 'Блок питания DEEPCOOL DQ750ST',
        price: 6700,
      },
      {
        title: 'Блок питания DEEPCOOL DQ750',
        price: 8300,
      },
      {
        title: 'Блок питания DEEPCOOL PQ850M',
        price: 10000,
      },
      {
        title: 'Блок питания DEEPCOOL PQ1000M [R-PQA00M-FA0B-EU]',
        price: 12000,
      },
      {
        title: 'Блок питания Super Flower Leadex Titanium 1600W',
        price: 53000,
      },
      {
        title: 'Блок питания Super Flower Leadex Platinum 2000W',
        price: 4500,
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
