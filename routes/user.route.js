const { Router } = require("express");
const { login, register, changePassword } = require("../controllers/user.controller")
const middleware = require("../middleware/login");

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.patch('/change-password', middleware.auth, changePassword);

module.exports = router;
