const createError = require("http-errors");
const User = require("../models/user");
const mongoose = require("mongoose");

module.exports.signup = (req, res, next) => {
    res.render("user/signup")
}

module.exports.doSignup = (req, res, next) => {    
    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                console.error(errors);
                res.render("user/signup", {
                    user: req.body,
                    errors: {email: "Email already resgistered"}
                });
            } else {
                const user = new User(req.body);
                return user.save()
                    .then((user) => {
                        res.redirect("/session/login")
                    });
            }
        })
        .catch(error => {
            if (error instanceof mongoose.Error.ValidationError) {
                res.render('user/signup', {
                    user: req.body,
                    errors: error.errors
                });
            } else {
                next(error);
            }
        })
}
