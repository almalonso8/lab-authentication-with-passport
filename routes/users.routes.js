const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require('../middlewares/auth.middleware');

//middleware
//constants
//router.get('/', authMiddleware.isAuthenticated, authMiddleware.checkRole('ADMIN'), userController.);
router.get("/signup", userController.signup);
router.post("/signup", userController.doSignup);


module.exports = router;