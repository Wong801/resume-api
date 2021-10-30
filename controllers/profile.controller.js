const Profile = require("../entity/mapper/profile.mapper");
const Response = require("../entity/mapper/response.mapper");
const db = require("../models");

const Profiles = db.profiles;

let msg
let response

module.exports = {
  getProfile: async (req, res) => {
    if(res.locals.userData) {
      await Profiles.findAll({
        attributes: [
          'id',
          'name',
          'bornDate',
          'bornPlace',
          'image',
          'age',
          'lastPosition',
          'lastCompany'
        ]
      }).then(data => {
        msg = "Success"
        response = new Response(msg, data)
        return res.status(200).json(response)
      }).catch(() => {
        msg = "Error"
        response = new Response(msg, null, false)
        return res.status(500).json(response)
      })
    }
  },
  postProfile: async (req, res) => {
    if(res.locals.userData) {
      const profile = new Profile(
        req.body.name || null, 
        req.body.bornDate || null, 
        req.body.bornPlace || null, 
        req.body.image || null,
        req.body.age || null,
        req.body.lastPosition || null,
        req.body.lastCompany || null
      )

      await Profiles.create(profile)
        .then(() => {
          msg = "Added new Profile data"
          response = new Response(msg, null)
          return res.status(200).json(response)
        })
        .catch(err => {
          msg = err.errors[0]
          response = new Response(msg, null, false)
          return res.status(400).json(response)
        })
    }
  },
  updateProfile: async (req, res) => {
    if(res.locals.userData) {
      const profile = new Profile(
        req.body.name || null, 
        req.body.bornDate || null, 
        req.body.bornPlace || null, 
        req.body.image || null,
        req.body.age || null,
        req.body.lastPosition || null,
        req.body.lastCompany || null
      )
  
      await Profiles.findOne({
        where: {
          id: req.query.id
        }
      })
        .then(data => {
          if(!data) {
            msg = "No Record Found"
            response = new Response(msg, null, false)
            return res.status(404).json(response)
          }
          let obj = {}
          for (const key in profile) {
            if(profile[key]) {
              obj[key] = profile[key]
            }
          }
          data.set(obj)
          data.save()
          obj = {}
          msg = "Profile data successfully edited"
          response = new Response(msg, null)
          return res.status(200).json(response)
        })
    }
  }
}
