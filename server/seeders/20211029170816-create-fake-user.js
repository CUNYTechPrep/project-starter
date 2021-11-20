'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('user', [{
        email: 'JohnDoe@hello.com',
        password: "123455",
        user_id: "1b6147a4-43d4-11ec-81d3-0242ac130003",
        createdAt: "2021-10-28T22:30:38.072Z",
        updatedAt: "2021-10-28T22:30:38.072Z"
      }, {
        email: 'JaneDoe@hello.com',
        password: "JaneDoe",
        user_id: "1b614a1a-43d4-11ec-81d3-0242ac130003",
        createdAt: "2021-10-28T22:30:38.072Z",
        updatedAt: "2021-10-28T22:30:38.072Z"
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('user', null, {});
  }
};
