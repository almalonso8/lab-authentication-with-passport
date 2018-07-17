const passport = require("passport");

module.exports.login = (req, res, next) => {
    res.render("session/login")
}

