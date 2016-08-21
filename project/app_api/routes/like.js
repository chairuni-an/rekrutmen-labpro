'use strict';

var User = require('../models/user');
var Post = require('../models/post');

module.exports = function(router) {
  router.post('/posts/:id/like/:username', function(req, res) {
    console.log('POST Request: ' + req.url);
    var id = req.params.id;
    var username = req.params.username;

    Post.findById(id)
    .populate('user', 'username')
    .exec(function(err, post) {
      if (err) { console.log(err); }
      post.likes.push(username);
      post.save(function(err) {
        User.findOne({username: username}, function(err, liker) {
          User.findOne({username: post.user.username}, function(err, user) {
            if (err) { console.log(err); }
            if (!user.notif) { user.notif = []; }
            if (username !== user.username) {
              var notif = {
                img: liker.avatar,
                url: '/posts/' + post._id,
                msg: '<b>' + username + '</b>' + ' liked your post.',
                date: Date.now()
              };
              var duplicated = user.notif.find(function(n) {
                return n.msg === notif.msg && n.url === notif.url;
              })
              if (!duplicated) {
                user.notif.unshift(notif);
                user.newNotif++;
                user.save();
              }
            }
            res.json(post);
          });
        });
      })
    });
  });

  router.delete('/posts/:id/like/:username', function(req, res) {
    console.log('DELETE Request: ' + req.url);
    var id = req.params.id;
    var username = req.params.username;

    Post.findById(id)
    .exec(function(err, post) {
      if (err) { console.log(err); }

      // Delete from likes array
      var index = post.likes.indexOf(username);
      post.likes.splice(index, 1)
      post.save(function (err) {
        if (err) { console.log(err); }
        res.json(post);
      })
    });
  });
}
