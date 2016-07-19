'use strict'

var passport = require('passport');
var User = require('../models/user');

module.exports = function(router) {

  router.post('/login', function(req, res) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return console.log(err);
      }
      if (user) {
        return res.json({ token: user.generateJwt()});
      } else {
        return res.status(401).json(info);
      }
    })(req, res);
  });
}
