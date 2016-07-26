'use strict';

var Post = require('../models/post');

module.exports = function(router) {
  router.post('/posts/:id/like/:username', function(req, res) {
    var id = req.params.id;
    var username = req.params.username;

    Post.findById(id)
    .exec(function(err, post) {
      if (err) { console.log(err); }
      post.likes.push(username);
      post.save(function (err) {
        if (err) { console.log(err); }
        res.json(post);
      })
    });
  });

  router.delete('/posts/:id/like/:username', function(req, res) {
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
