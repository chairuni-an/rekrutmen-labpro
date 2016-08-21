'use strict'

var upload = require('../config/multer');
var passport = require('passport');
var User = require('../models/user');

module.exports = function(router) {
  router.get('/users/:username', function(req, res) {
    console.log('GET Request: ' + req.url);
    var username = req.params.username;
    User.findOne({'username': username})
    .populate('posts')
    .exec(function(err, user) {
      if (err) { console.log(err); }
      res.json(user);
    });
  });

  router.post('/users', function(req, res) {
    console.log('POST Request: ' + req.url);
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      fullname: req.body.fullname,
      avatar: '/static/img/noImage.jpeg',
      following: [],
      followers: [],
      newNotif: 0,
      notif: [],
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

      user.save(function(err) {
        res.json({
          token: user.generateJwt()
        });
      });
    });
  });

  router.put('/users/:username/password', function(req, res) {
    console.log('PUT Request: ' + req.url);
    var username = req.params.username;
    var oldPass = req.body.oldPass;
    var newPass = req.body.newPass;

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
    console.log('POST Request: ' + req.url);
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
  router.post('/users/:username/notif', function(req, res) {
    console.log('POST Request: ' + req.url);
    var username = req.params.username;
    User.findOne({username: username}, function(err, user) {
      if (err) { console.log(err); }
      user.newNotif = 0;
      user.save(function(err) {
        if (err) { console.log(err); }
        res.json();
      })
    })
  });

  router.post('/users/:username/twitter', function(req, res) {
    console.log('POST Request: ' + req.url);
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
