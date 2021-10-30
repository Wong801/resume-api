const { Router } = require("express");
const { getProfile, postProfile, updateProfile } = require("../controllers/profile.controller")
const middleware = require("../middleware/login");

const router = Router();

router.get('/', middleware.auth, getProfile);
router.post('/add', middleware.auth, postProfile);
router.patch('/edit', middleware.auth, updateProfile);

module.exports = router;
