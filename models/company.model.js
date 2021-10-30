module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("companies", { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    companyName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
    },
    position: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    desc: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: Sequelize.DATE
  });

  return Company
}