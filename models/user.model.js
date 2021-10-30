module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    level: {
      type: Sequelize.INTEGER(2),
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: Sequelize.STRING
    },
    rememberedToken: {
      type: Sequelize.TEXT
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  });

  return Users
}