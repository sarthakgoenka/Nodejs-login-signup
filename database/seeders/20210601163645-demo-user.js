"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password =
      "$2a$10$QRUIZwSPLLkS4BVJQZ75wu6LROYIqe5eKMsWYV2C21bCnUNS51NAK"; // secret
    const user = {
      email: "user@example.com",
      password,
      firstName: "John",
      lastName: "Doe",
    };
    await queryInterface.bulkInsert("Users", [user], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
