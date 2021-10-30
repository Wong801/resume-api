const Project = require("../entity/mapper/project.mapper");
const Response = require("../entity/mapper/response.mapper");
const db = require("../models");

const Projects = db.projects;

let msg
let response

module.exports = {
  getProject: async (req, res) => {
    await Profiles.findAll({
      attributes: [
        "id",
        "title",
        "desc",
        "link",
        "image",
        "lang",
      ]
    }).then(data => {
      msg = "Success"
      data.lang = data.lang.split(",")
      response = new Response(msg, data)
      return res.status(200).json(response)
    }).catch(() => {
      msg = "Error"
      response = new Response(msg, null, false)
      return res.status(500).json(response)
    })
  },
  postProject: async (req, res) => {
    if(res.locals.userData && res.locals.userData.level === 5) {
      
    }
  },
  updateProject: async (req, res) => {
    if(res.locals.userData && res.locals.userData.level === 5) {
    
    }
  },
  deletProject: async (req, res) => {
    if(res.locals.userData && res.locals.userData.level === 5) {
    
    }
  }
}