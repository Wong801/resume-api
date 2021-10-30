const { verifyToken } = require("../controllers/jwt.controller");
const Response = require("../entity/mapper/response.mapper");

exports.auth = (req, res, next) => {
  const auth = req.headers.authorization
  if(!auth) {
    msg = "Authorization token not found"
    response = new Response(msg, null, false)
    return res.status(401).json(response)
  }

  const split = auth.split(" ")

  if(split[0] !== "Bearer") {
    msg = "Invalid token type"
    response = new Response(msg, null, false)
    return res.status(401).json(response)
  }

  const token = split[1]

  verifyToken(token)
    .then(data => {
      res.locals.userData = data
      next();
    })
    .catch(() => {
      msg = "Invalid token"
      response = new Response(msg, null, false)
      return res.status(401).json(response)
    })
}