const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/user");
const createError= require("http-errors");
const session = require("express-session");

module.exports.login = (req, res, next) => {
    res.render("session/login")
}

module.exports.doLogin = (req, res, next) => {

function renderWithErrors(errors){
     res.status(400).render('sessions/create', {errors: errors});
}
 
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    renderWithErrors({
      email: email ? undefined : 'Email is required',
      password: password ? undefined : 'Password is required'
    });
  } else {
    passport.authenticate('local-auth', (error, user, validation) => {
      if (error) {
        next(error);
      } else if (!user) {
        renderWithErrors(validation);
      } else {
        req.login(user, (error) => {
          if (error) {
            next(error)
          } else {
            res.redirect("/user/private")
          }
        });
      }
    })(req, res, next);
  }
}