'use strict';

var express = require('express');
var User = require('../models/user');
var passport = require('passport');
var router = express.Router();

router.post('/users/:username?', function(req, res) {
  // Check whether the username does exist
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname,
  });
  user.setPassword(req.body.password);
  user.posts = [];
  user.save(function(err) {
    if (err) { res.json({}); }
    res.json({ token: user.generateJwt() });
  });
});

router.post('/login', function(req, res) {
  console.log('Olala');
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

module.exports = router
