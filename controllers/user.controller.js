const createError = require("http-errors");
const User = require("../models/user");
const mongoose = require("mongoose");

module.exports.form = (req, res, next) => {
    res.render("passport/singup")
}
