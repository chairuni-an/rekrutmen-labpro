'use strict';

var express = require('express');
var User = require('../models/user');
var Post = require('../models/post');
var passport = require('passport');
var router = express.Router();
var upload = require('../config/multer');

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

router.get('/posts/:id', function(req, res) {
  var id = req.params.id; // ID string

  Post.findOne({'_id': id})
  .populate('user')
  .exec(function(err, post) {
    if (err) { console.log(err); }
    res.json(post);
  });
});

router.post('/posts', upload.single('file'), function(req, res) {
  var filePath = '/static/posts/' + req.file.filename;
  var user_id = req.body.user_id;
  var desc = req.body.desc;

  console.log(user_id);

  var post = new Post({
    user: user_id,
    img: filePath,
    date: Date.now(),
    desc: desc,
    comments: [],
    likes: [],
    hashtags: []
  });
  post.save(function(err) {
    if (err) { return res.json({err: err}); }
    User.findOne({'_id': user_id}, function(err, user) {
      if (err) { return res.json({err: err}); }
      user.posts.unshift(post._id);
      user.save(function(err) {
        if (err) { return res.json({err: err}); }
        res.json({err: 0})
      })
    });
  });
});

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

module.exports = router
