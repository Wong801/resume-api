module.exports = (sequelize, Sequelize) => {
  const Projects = sequelize.define("projects", { 
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

  return Projects
}