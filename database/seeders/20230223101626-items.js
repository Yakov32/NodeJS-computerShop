'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      {
        title: 'Видеокарта MSI GeForce 210',
        price: 3500,
        category_id: 2,
        company_id: 7,
      },
      {
        title: 'Видеокарта Palit GeForce GT 710 Silent LP',
        price: 4000,
        category_id: 2,
        company_id: 4,
      },
      {
        title: 'Видеокарта Palit GeForce RTX 3070 Ti GamingPro',
        price: 56000,
        category_id: 2,
        company_id: 4,
      },
      {
        title: 'Видеокарта GIGABYTE GeForce RTX 3070 Ti GAMING OC',
        price: 60000,
        category_id: 2,
        company_id: 3,
      },
      {
        title: 'Видеокарта Palit GeForce RTX 4070 Ti GameRock Classic',
        price: 81000,
        category_id: 2,
        company_id: 4,
      },
      {
        title: 'Видеокарта GIGABYTE GeForce RTX 3060 Ti GAMING OC (LHR)',
        price: 44000,
        category_id: 2,
        company_id: 3,
      },
      {
        title: 'Процессор AMD Ryzen 5600x',
        price: 25000,
        category_id: 1,
        company_id: 1,
      },
      {
        title: 'Видеокарта GIGABYTE GeForce RTX 3060 Ti GAMING [GV-N306TGAMING-8GD]',
        price: 69500,
        category_id: 2,
        company_id: 3,
      },
      {
        title: 'Видеокарта Palit GeForce GTX 1660 SUPER Gaming Pro [NE6166S018J9-1160A-1]',
        price: 40000,
        category_id: 2,
        company_id: 4,
      },
      {
        title: 'Материнская плата GIGABYTE B450M S2H V2',
        price: 5800,
        category_id: 3,
        company_id: 3,
      },
      {
        title: 'Видеокарта GIGABYTE GeForce GTX 1660 TI D6 [GV-N166TD6-6GD]',
        price: 30000,
        category_id: 2,
        company_id: 3,
      },
      {
        title: 'Видеокарта MSI GeForce GTX 1050 Ti GAMING X [GTX 1050 TI GAMING X 4G]',
        price: 10000,
        category_id: 2,
        company_id: 7,
      },
      {
        title: 'Процессор Intel Core i5-12400F OEM',
        price: 14399,
        category_id: 1,
        company_id: 2,
      },
      {
        title: 'Процессор AMD Ryzen 5 3600 OEM',
        price: 9200,
        category_id: 1,
        company_id: 1,
      },
      {
        title: 'Процессор AMD Ryzen 7 5800X OEM',
        price: 21999,
        category_id: 1,
        company_id: 1,
      },
      {
        title: 'Процессор Intel Core i5-10400F OEM',
        price: 9500,
        category_id: 1,
        company_id: 2,
      },
      {
        title: 'Процессор Intel Core i7-12700K OEM',
        price: 31000,
        category_id: 1,
        company_id: 2,
      },
      {
        title: 'Процессор Intel Core i9-10900X BOX',
        price: '63000',
        category_id: 1,
        company_id: 2,
      },
      {
        title: 'Процессор Intel Core i9-10940X OEM',
        price: 70000,
        category_id: 1,
        company_id: 2,
      },
      {
        title: 'Процессор Intel Celeron G5905 BOX',
        price: 3400,
        category_id: 1,
        company_id: 2,
      },
      {
        title: 'Процессор Intel Celeron G4900 OEM',
        price: 3900,
        category_id: 1,
        company_id: 2,
      },
      {
        title: 'Материнская плата GIGABYTE B550 AORUS ELITE V2',
        price: 13200,
        category_id: 3,
        company_id: 3,
      },
      {
        title: 'Материнская плата GIGABYTE Z690 GAMING X DDR4',
        price: 17000,
        category_id: 3,
        company_id: 3,
      },
      {
        title: 'Материнская плата MSI MAG Z690 TOMAHAWK WIFI',
        price: 22000,
        category_id: 3,
        company_id: 7,
      },
      {
        title: 'Материнская плата GIGABYTE B550M DS3H',
        price: 10000,
        category_id: 3,
        company_id: 3,
      },
      {
        title: 'Материнская плата Elitegroup GLKD-I2-N4020',
        price: 4500,
        category_id: 3,
        company_id: 5,
      },
      {
        title: 'Материнская плата Esonic G31CHL3',
        price: 3000,
        category_id: 3,
        company_id: 6,
      },
      {
        title: 'Материнская плата MSI MEG X670E ACE',
        price: 72000,
        category_id: 3,
        company_id: 7,
      },
      {
        title: 'Материнская плата MSI MEG X670E GODLIKE',
        price: 123000,
        category_id: 3,
        company_id: 7,
      },
      {
        title: 'Материнская плата GIGABYTE Z790 AORUS MASTER',
        price: 49000,
        category_id: 3,
        company_id: 3,
      },
      {
        title: 'Оперативная память AMD Radeon R5 Entertainment Series 2 ГБ',
        price: 650,
        category_id: 4,
        company_id: 1,
      },
      {
        title: 'Оперативная память AMD Radeon R3 Value Series 4 ГБ',
        price: 800,
        category_id: 4,
        company_id: 1,
      },
      {
        title: 'Оперативная память Kingston FURY Beast Black 16 ГБ',
        price: 4400,
        category_id: 4,
        company_id: 8,
      },
      {
        title: 'Оперативная память AMD Radeon R9 Gamer Series 16 ГБ',
        price: 3400,
        category_id: 4,
        company_id: 1,
      },
      {
        title: 'Оперативная память Kingston FURY Beast Black 32 ГБ',
        price: 12000,
        category_id: 4,
        company_id: 8,
      },
      {
        title: 'Оперативная память G.Skill AEGIS 32 ГБ',
        price: 6600,
        category_id: 4,
        company_id: 12,
      },
      {
        title: 'Оперативная память Kingston FURY Beast Black [KF432C16BBK2/32] 32 ГБ',
        price: 7700,
        category_id: 4,
        company_id: 8,
      },
      {
        title: 'Оперативная память G.Skill TRIDENT Z RGB 128 ГБ',
        price: 31500,
        category_id: 4,
        company_id: 12,
      },
      {
        title: 'Оперативная память Kingston FURY Renegade RGB 128 ГБ',
        price: 33000,
        category_id: 4,
        company_id: 8,
      },
      {
        title: 'Блок питания AeroCool ECO 450W',
        price: 1900,
        category_id: 7,
        company_id: 9,
      },
      {
        title: 'Блок питания AeroCool ECO 500W',
        price: 2000,
        category_id: 7,
        company_id: 9,
      },
      {
        title: 'Блок питания AeroCool VX PLUS 500W',
        price: 2150,
        category_id: 7,
        company_id: 9,
      },
      {
        title: 'Блок питания DEEPCOOL DQ750ST',
        price: 6700,
        category_id: 7,
        company_id: 10,
      },
      {
        title: 'Блок питания DEEPCOOL DQ750',
        price: 8300,
        category_id: 7,
        company_id: 10,
      },
      {
        title: 'Блок питания DEEPCOOL PQ850M',
        price: 10000,
        category_id: 7,
        company_id: 10,
      },
      {
        title: 'Блок питания DEEPCOOL PQ1000M [R-PQA00M-FA0B-EU]',
        price: 12000,
        category_id: 7,
        company_id: 10,
      },
      {
        title: 'Блок питания Super Flower Leadex Titanium 1600W',
        price: 53000,
        category_id: 7,
        company_id: 11,
      },
      {
        title: 'Блок питания Super Flower Leadex Platinum 2000W',
        price: 4500,
        category_id: 7,
        company_id: 11,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  }
};