const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Person = require("../entity/mapper/user.mapper");
const Response = require("../entity/mapper/response.mapper");
const db = require("../models");

const Users = db.users;

let msg
let response

module.exports = {
  login: async (req, res) => {
    const user = new Person(
      req.body.username || null, 
      req.body.email || null, 
      req.body.password || null
    )

    await Users.findOne({
      where: {
        username: user.username
      }
    }).then(cred => {
      bcrypt.compare(user.password, cred.password)
        .then(success => {
          if(success) {
            const token = jwt.sign(
              {
                level: cred.level,
                username: cred.username,
                email: cred.email,
                exp: Math.floor(Date.now() / 1000) + (60 * 60)
              },
              process.env.PRIVATE_KEY
            )
            msg = "Login Success"
            const data = {
              token
            }
            response = new Response(msg, data)
            return res.status(200).json(response)
          }
          msg = "Invalid username or password"
          response = new Response(msg, null, false)
          return res.status(401).json(response)
        })
    })
  },
  register: async (req, res) => {
    const user = new Person(
      req.body.username || null, 
      req.body.email || null, 
      req.body.password || null
    )

    for(key in user) {
      if(!user[key]) {
        msg = `${key} cannot be null`
        response = new Response(msg, null, false)
        return res.status(400).json(response)
      }
    }
    if(user.password.length < 8) {
      msg = "Password must be 8 character or longer",
      response = new Response(msg, null, false)
      return res.status(500).json(response)
    }

    bcrypt.hash(user.password, 10, async (err, hash) => {
      if(err) {
        msg = "Error",
        response = new Response(msg, null, false)
        return res.status(500).json(response)
      }
      user.password = hash

      await Users.create(user)
        .then(success => {
          if(success) {
            msg = "Successfully Registered"
            response = new Response(msg, null)
            return res.status(400).json(response)
          }
        })
        .catch(err => {
          const error = err.errors[0]
          msg = error.message.match('isEmail') 
            ? error.path + " is invalid" 
            : error.path + " is already taken"
          response = new Response(msg, null, false)
          return res.json(response)
        })
    })
  }
}
