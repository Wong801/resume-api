const jwt = require("jsonwebtoken");
const db = require("../models");

const Users = db.users;


module.exports = {
  verifyToken: async (token) => {
    return new Promise((resolve, reject) => {
      jwt.verify(token, process.env.PRIVATE_KEY, async (err, decoded) => {
        if(err) {
          reject(null)
        } else {
          await Users.findOne({
            where: {
              username: decoded.username,
              rememberedToken: token
            }
          }).then(data => {
            if(data) {
              resolve(decoded)
            }
            reject(null)
          }).catch(() => {
            reject(null)
          })
        }
      })

    })
  }
}
