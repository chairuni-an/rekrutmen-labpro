'use strict'

var passport = require('passport');
var User = require('../models/user');

module.exports = function(router) {
  router.get('/users/:username', function(req, res) {
    var username = req.params.username;
    User.findOne({'username': username})
    .populate('posts')
    .exec(function(err, user) {
      if (err) { console.log(err); }
      res.json(user);
    });
  });

  router.post('/users', function(req, res) {
    // Check whether the username does exist
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      fullname: req.body.fullname,
      avatar: '/static/img/noImage.jpeg',
      following: [],
      followers: [],
      posts: []
    });
    user.setPassword(req.body.password);
    user.save(function(err) {
      if (err) { res.json({}); }
      res.json({ token: user.generateJwt() });
    });
  });
}
