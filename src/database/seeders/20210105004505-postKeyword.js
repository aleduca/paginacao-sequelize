"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for (let i = 0; i < 10; i++) {
      await queryInterface.bulkInsert("postKeywords", [
        {
          postId: Math.ceil(Math.random() * 10),
          keywordId: Math.ceil(Math.random() * 10),
        },
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("postKeywords", null, {});
  },
};
