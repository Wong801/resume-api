const Company = require("../entity/mapper/company.mapper");
const Response = require("../entity/mapper/response.mapper");
const db = require("../models");

const Companies = db.companies;

let msg
let response

module.exports = {
  getCompany: async(req, res) => {
    await Companies.findAll({
      attributes: [
        "id",
        "companyName",
        "companySite",
        "startDate",
        "endDate",
        "position",
        "desc",
      ],
      order: sequelize.col("startDate")
    }).then(data => {
      msg = "Success"
      response = new Response(msg, data)
      return res.status(200).json(response)
    }).catch(() => {
      msg = "Error"
      response = new Response(msg, null, false)
      return res.status(500).json(response)
    })
  }, 
  postCompany: async(req, res) => {
    if(res.locals.userData && res.locals.userData.level === 5) {
      const company = new Company(
        req.body.companyName || null, 
        req.body.companySite || null,
        req.body.startDate || null, 
        req.body.endDate || null, 
        req.body.position || null,
        req.body.desc || null
      )

      await Companies.create(company)
        .then(() => {
          msg = "Added new company data"
          response = new Response(msg, null)
          return res.status(200).json(response)
        })
        .catch(err => {
          msg = err.errors[0].message
          response = new Response(msg, null, false)
          return res.status(400).json(response)
        })
    }
    msg = "you're not authorized to do that"
    response = new Response(msg, null, false)
    return res.status(401).json(response)
  }, 
  updateCompany: async(req, res) => {
    if(res.locals.userData && res.locals.userData.level === 5) {
      const company = new Company(
        req.body.companyName || null, 
        req.body.companySite || null,
        req.body.startDate || null, 
        req.body.endDate || null, 
        req.body.position || null,
        req.body.desc || null
      )

      await Companies.findOne({
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
          for (const key in company) {
            if(company[key]) {
              obj[key] = company[key]
            }
          }
          data.set(obj)
          data.save()
          obj = {}
        })
        .finally(() => {
          msg = "Company data successfully edited"
          response = new Response(msg, null)
          return res.status(200).json(response)
        })
    }
    msg = "you're not authorized to do that"
    response = new Response(msg, null, false)
    return res.status(401).json(response)
  }, 
  deleteCompany: async(req, res) => {
    if(res.locals.userData && res.locals.userData.level === 5) {
      await Companies.findOne({
        where: {
          id: req.query.id
        }
      }).then(data => {
        if(!data) {
          msg = "No Record Found"
          response = new Response(msg, null, false)
          return res.status(404).json(response)
        }
        data.destroy()
      }).finally(() => {
        msg = "Company data successfully deleted"
        response = new Response(msg, null)
        return res.status(200).json(response)
      })
    }
    msg = "you're not authorized to do that"
    response = new Response(msg, null, false)
    return res.status(401).json(response)
  }
}
