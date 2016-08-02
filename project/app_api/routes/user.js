'use strict'

var passport = require('passport');
var User = require('../models/user');

module.exports = function(router) {
  router.get('/users/:username', function(req, res) {
    var username = req.params.username;
    User.findOne({'username': username})
    .populate('posts', 'img')
    .exec(function(err, user) {
      if (err) { console.log(err); }
      res.json(user);
    });
  });

  router.post('/users', function(req, res) {
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

  router.post('/users/:username/twitter', function(req, res) {
    var username = req.params.username;
    User.findOne({'username': username}, function(err, user) {
      user.auth.twitter.token = req.body.token;
      user.auth.twitter.secret = req.body.secret;
      user.save(function(err) {
        if (err) { res.json({ err: err }); }
        res.json({ });
      });
    });
  });
}
