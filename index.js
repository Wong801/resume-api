require("dotenv").config();

// import modules
const express = require("express");
const cors = require("cors");

// import DB config
const db = require("./models");

// initialize express
const app = express();

// cors (middleware)
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()

// import routes
const user = require('./routes/user.route')

// Route
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome"
  })
})

app.use("/user", user)

// set port
const port = process.env.PORT || 5000;

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
