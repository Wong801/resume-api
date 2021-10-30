module.exports = (sequelize, Sequelize) => {
  const Profiles = sequelize.define("profiles", { 
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
      type: Sequelize.DATE,
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

  return Profiles
}