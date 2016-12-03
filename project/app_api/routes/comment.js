'use strict';

var User = require('../models/user');
var Post = require('../models/post');

module.exports = function(router) {
  router.post('/posts/:id/comments', function(req, res) {
    console.log('POST Request: ' + req.url);
    var id = req.params.id;
    var comment = {
      id: req.body.id,
      username: req.body.username,
      date: req.body.date,
      body: req.body.body,
    }

    Post.findById(id)
    .populate('user')
    .exec(function(err, post) {
      if (err) { console.log(err); }
      post.comments.push(comment);
      User.findOne({username: req.body.username}, function(err, liker) {
        User.findOne({username: post.user.username}, function(err, user) {
          if (err) { console.log(err); }
          if (!user.notif) { user.notif = []; }
          if (liker.username !== user.username) {
            var notif = {
              img: liker.avatar,
              url: '/posts/' + post._id,
              msg: '<b>' + liker.username + '</b>' + ' commented on your post.',
              date: Date.now()
            };
            var duplicated = user.notif.find(function(n) {
              return n.msg === notif.msg && n.url === notif.url;
            })
            if (!duplicated) {
              user.newNotif++;
              user.notif.unshift(notif);
              user.save();
            }
          }
          post.save(function(err) {
            res.json(post);
          });
        });
      });
    });
  });
}
