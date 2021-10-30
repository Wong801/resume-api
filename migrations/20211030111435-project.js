"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable("users", { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("projects", { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
      },
      desc: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      lang: {
        type: Sequelize.STRING,
        allowNull: false,
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
     await queryInterface.dropTable("projects");
  }
};
