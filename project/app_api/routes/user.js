'use strict'

var upload = require('../config/multer');
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
      if (err) {res.json({err: err});}
      res.json();
    });
  });

  router.put('/users/:username', function(req, res) {
    console.log("PUT Request: " + req.url);
    var username = req.params.username;
    var newUser = req.body;

    User.findOne({username: username}, function(err, user) {
      user.fullname = newUser.fullname;
      user.email = newUser.email;
      user.bio = newUser.bio;

      if (user.username != newUser.username) {
        user.username = newUser.username;

        for (let i = 0; i < user.followers.length; i++) {
          var followerUname = user.followers[i];
          User.findOne({username: followerUname}, function(err, fUser) {
            console.log(fUser.username);
            var j = fUser.following.indexOf(username);
            fUser.following.splice(j, 1);
            fUser.following.push(newUser.username);
            console.log(fUser.following);
            fUser.save();
          });
        }

        setTimeout(function() {
          for (let i = 0; i < user.following.length; i++) {
            var followingUname = user.following[i];
            User.findOne({username: followingUname}, function(err, fUser) {
              console.log(fUser.username);
              var j = fUser.followers.indexOf(username);
              fUser.followers.splice(j, 1);
              fUser.followers.push(newUser.username);
              console.log(fUser.followers);
              fUser.save();
            });
          }
        }, 2000);
      }
      user.save(function(err) {
        res.json({
          token: user.generateJwt()
        });
      });
    });
  });

  router.put('/users/:username/password', function(req, res) {
    var username = req.params.username;
    var oldPass = req.body.oldPass;
    console.log(oldPass);
    var newPass = req.body.newPass;
    console.log(newPass);

    User.findOne({username: username}, function(err, user) {
      if (!user.validPassword(oldPass)) {
        res.json({status: 1});
      } else {
        user.setPassword(newPass);
        user.save(function(err) {
          res.json({status: 2});
        })
      }
    });
  });

  router.post('/users/:username/avatar', upload.single('file'), function(req, res) {
    var filePath = '/static/posts/' + req.file.filename;
    var username = req.params.username;

    User.findOne({username: username}, function(err, user) {
      // Delete old file
      var oldFileName = user.avatar.split('/')[3];
      if (oldFileName !== 'noImage.jpeg') {
        var oldFilePath = __dirname + '/../../public/posts/' + oldFileName;
        var fs = require('fs');
        fs.unlinkSync(oldFilePath);
      }
      user.avatar = filePath;
      user.save(function(err) {
        res.json(user);
      });
    });
  });

  /* Miscellaneous routings */
  router.post('/users/:username/twitter', function(req, res) {
    var username = req.params.username;
    User.findOne({'username': username}, function(err, user) {
      user.auth.twitter.token = req.body.token;
      user.auth.twitter.secret = req.body.secret;
      user.save(function(err) {
        if (err) { res.json({ err: err }); }
        res.json();
      });
    });
  });
}
