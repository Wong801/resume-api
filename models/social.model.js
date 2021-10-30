module.exports = (sequelize, Sequelize) => {
  const Social = sequelize.define("socials", { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    social: {
      type: Sequelize.STRING,
      unique: true,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: Sequelize.DATE
  });

  return Social
}