'use strict';

var Post = require('../models/post');

module.exports = function(router) {
  router.post('/posts/:id/comments', function(req, res) {
    var id = req.params.id;
    var comment = {
      id: req.body.id,
      username: req.body.username,
      date: req.body.date,
      body: req.body.body,
    }

    Post.findById(id)
    .exec(function(err, post) {
      if (err) { console.log(err); }
      post.comments.push(comment);
      post.save(function (err) {
        if (err) { console.log(err); }
        res.json(post);
      })
    });
  });
}
