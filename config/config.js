module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "portfolio",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.USER,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
