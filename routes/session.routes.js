const express = require("express");
const router = express.Router();
const passport = require("passport");
const sessionControler = require("../controllers/session.controller");


router.get("/login", sessionControler.login);
router.post("/login", sessionControler.doLogin);


module.exports = router;