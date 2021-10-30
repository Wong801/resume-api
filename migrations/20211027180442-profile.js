"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable("users", { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("profiles", { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bornDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      bornPlace: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT
      },
      age: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      lastPosition: {
        type: Sequelize.STRING
      },
      lastCompany: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable("users");
     */
    await queryInterface.dropTable("profiles");
  }
};
