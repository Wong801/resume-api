const { Router } = require("express");
const { getCompany, postCompany, updateCompany, deleteCompany } = require("../controllers/company.controller")
const middleware = require("../middleware/login");

const router = Router();

router.get("/", getCompany);
router.post("/add", middleware.auth, postCompany);
router.patch("/edit", middleware.auth, updateCompany);
router.delete("/delete", middleware.auth, deleteCompany);

module.exports = router;
