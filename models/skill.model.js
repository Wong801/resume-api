module.exports = (sequelize, Sequelize) => {
  const Skill = sequelize.define("skills", { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stack: {
      type: Sequelize.STRING,
      unique: true,
    },
    lang: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isSkill: {
      type: Sequelize.BOOLEAN, 
      allowNull: false, 
      defaultValue: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    updatedAt: Sequelize.DATE
  });

  return Skill
}