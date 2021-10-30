const { Router } = require("express");
const { getProject, postProject, updateProject, deletProject } = require("../controllers/project.controller")
const middleware = require("../middleware/login");

const router = Router();

router.get("/", middleware.auth, getProject);
router.post("/add", middleware.auth, postProject);
router.patch("/edit", middleware.auth, updateProject);
router.delete("/delete", middleware.auth, deletProject);

module.exports = router;
