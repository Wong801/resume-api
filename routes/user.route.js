const { Router } = require("express");
const { login, register, changePassword, logout } = require("../controllers/user.controller")
const middleware = require("../middleware/login");

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.patch("/change-password", middleware.auth, changePassword);
router.post("/logout", middleware.auth, logout);

module.exports = router;
