module.exports = (sequelize, Sequelize) => {
  const Education = sequelize.define("educations", { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    school: {
      type: Sequelize.STRING,
      unique: true,
    },
    degree: {
      type: Sequelize.STRING,
      allowNull: false
    },
    startYear: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    endYear: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: Sequelize.DATE
  });

  return Education
}