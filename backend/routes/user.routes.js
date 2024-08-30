const express = require("express");
const router = express.Router();
const usersController = require("../controller/users.controller");
const AuthMiddleware = require("../middleware/auth.middleware");

router.get("/", AuthMiddleware, usersController.get);

module.exports = router;
