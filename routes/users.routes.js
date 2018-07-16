const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

//middleware
//constants

router.get("/signup", userController.form);

module.exports = router;