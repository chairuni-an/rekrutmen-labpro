'use strict';

var upload = require('../config/multer');
var passport = require('passport');
var User = require('../models/user');
var Post = require('../models/post');

module.exports = function(router) {
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
}
