'use strict';

const faker = require('faker/locale/pt_BR');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < 20; i++) {
      await queryInterface.bulkInsert('posts', [
        {
          title: faker.lorem.sentence(),
          slug: faker.lorem.slug(),
          content: faker.lorem.paragraph(),
          userId: Math.ceil(Math.random() * 10),
        },
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  },
};
