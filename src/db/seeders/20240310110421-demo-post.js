'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [{
      title: 'Test post #1',
      preview: 'This is the test post preview',
      content: 'This is the long and useful content of this brilliant post',
      createdAt: new Date().toUTCString(),
      updatedAt: new Date().toUTCString()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
