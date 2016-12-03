'use strict';

var upload = require('../config/multer');
var passport = require('passport');
var User = require('../models/user');
var Post = require('../models/post');

function getHashtags(desc) {
  if (!desc) {
    return [];
  }
  var strings = desc.split(' ');
  console.log(strings);
  var ans = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === "#") {
      ans.push(strings[i].substring(1));
    }
  }
  return ans;
}

module.exports = function(router) {
  router.get('/posts/:id', function(req, res) {
    console.log('GET Request: ' + req.url);
    var id = req.params.id; // ID string

    Post.findOne({'_id': id})
    .populate('user')
    .exec(function(err, post) {
      if (err) { console.log(err); }
      if (!post) {
        res.json({
          error: true
        });
      } else {
        res.json(post);
      };
    });
  });

  router.post('/posts', upload.single('file'), function(req, res) {
    console.log('POST Request: ' + req.url);
    var filePath = '/static/posts/' + req.file.filename;
    var user_id = req.body.user_id;
    var desc = req.body.desc;
    var post = new Post({
      user: user_id,
      img: filePath,
      date: Date.now(),
      desc: desc,
      comments: [],
      likes: [],
      hashtags: getHashtags(desc)
    });
    post.save(function(err) {
      if (err) { return res.json({err: err}); }
      User.findOne({'_id': user_id}, function(err, user) {
        if (err) { return res.json({err: err}); }
        user.posts.unshift(post._id);
        user.save(function(err) {
          if (err) { return res.json({err: err}); }
          res.json({postID: post._id})
        })
      });
    });
  });

  router.delete('/posts/:id', function(req, res) {
    console.log('DELETE Request: ' + req.url);
    var id = req.params.id;
    Post.findById(id)
    .populate('user', '_id')
    .exec(function(err, post) {
      var user_id = post.user._id;
      var fileName = post.img.split('/')[3];
      Post.remove({_id: id}).exec();

      // Delete image file
      var filePath = __dirname + '/../../public/posts/' + fileName;
      var fs = require('fs');
      fs.unlinkSync(filePath);

      // Delete post from user
      User.findOne({'_id': user_id}, function(err, user) {
        var index = user.posts.indexOf(post._id);
        user.posts.splice(index, 1);
        user.save(function(err) {
          res.json({ err: 0 });
        })
      });
    });
  });
}
