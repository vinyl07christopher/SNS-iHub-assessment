const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const AuthMiddleware = require("../middleware/auth.middleware");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", AuthMiddleware, authController.logout);
router.get("/isAuthorized", AuthMiddleware, authController.isAuth);

module.exports = router;
