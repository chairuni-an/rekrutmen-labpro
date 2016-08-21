'use strict';

var User = require('../models/user');

module.exports = function(router) {
  router.post('/users/:username/follow/:followed', function(req, res) {
    console.log('POST Request: ' + req.url);
    var currUser = req.params.username;
    var username = req.params.followed;

    User.findOne({'username': currUser})
    .exec(function(err, follower) {
      if (err) { console.log(err); }
      follower.following.push(username);
      follower.save();
      User.findOne({'username': username})
      .exec(function(err, user) {
        if (err) { console.log(err); }
        user.followers.push(currUser);
        var notif = {
          img: follower.avatar,
          url: '/' + follower.username,
          msg: '<b>' + currUser + '</b>'+ ' followed you.',
          date: Date.now()
        };
        var duplicated = user.notif.find(function(n) {
          return n.msg === notif.msg && n.url === notif.url;
        });
        if (!duplicated) {
          user.notif.unshift(notif);
          user.newNotif++;
          user.save();
        }
        res.json(user);
      });
    });
  });

  router.delete('/users/:username/follow/:followed', function(req, res) {
    console.log('DELETE Request: ' + req.url);
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
