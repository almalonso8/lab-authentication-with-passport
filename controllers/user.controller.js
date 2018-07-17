const createError = require("http-errors");
const User = require("../models/user");
const mongoose = require("mongoose");

module.exports.signup = (req, res, next) => {
<<<<<<< HEAD
    res.render("user/signup")
=======
    res.render("passport/signup")
>>>>>>> 57d8c00c42a54fcf003d61f2dd981d7ae3e550f8
}

module.exports.doSignup = (req, res, next) => {
    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
            res.render("/private", {
                user: req.body,
                errors: {email: "Email already resgistered"}
            });
        } else {
            console.log(req.body)
            const user = new User(req.body);
            user.save()
            .then((user) => {
                 res.redirect("/signup")
            })
        }
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
<<<<<<< HEAD
        res.render('user/signup', {
=======
        res.render('passport/signup', {
>>>>>>> 57d8c00c42a54fcf003d61f2dd981d7ae3e550f8
          user: req.body,
          errors: error.errors
        });
      } else {
        next(error);
      }
    })
}
