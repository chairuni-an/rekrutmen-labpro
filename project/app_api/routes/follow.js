'use strict';

var User = require('../models/user');

module.exports = function(router) {
  router.post('/users/:username/follow/:followed', function(req, res) {
    var currUser = req.params.username;
    var username = req.params.followed;

    User.findOne({'username': currUser})
    .exec(function(err, user) {
      if (err) { console.log(err); }
      user.following.push(username);
      user.save(function (err) {
        if (err) { console.log(err); }
      })
    });

    User.findOne({'username': username})
    .exec(function(err, user) {
      if (err) { console.log(err); }
      user.followers.push(currUser);
      user.save(function (err) {
        res.json(user);
      })
    });
  });

  router.delete('/users/:username/follow/:followed', function(req, res) {
    var currUser = req.params.username;
    var username = req.params.followed;

    User.findOne({'username': currUser})
    .exec(function(err, user) {
      if (err) { console.log(err); }
      var index = user.following.indexOf(username);
      user.following.splice(index, 1)
      user.save(function (err) {
        if (err) { console.log(err); }
      })
    });

    User.findOne({'username': username})
    .exec(function(err, user) {
      if (err) { console.log(err); }
      var index = user.followers.indexOf(username);
      user.followers.splice(index, 1)
      user.save(function (err) {
        res.json(user);
      })
    });
  });
}
