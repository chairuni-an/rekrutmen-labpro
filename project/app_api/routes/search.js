'use strict';

var User = require('../models/user');
var Post = require('../models/post');

module.exports = function(router) {
  router.get('/search/:q', function(req, res) {
    console.log('GET Request: ' + req.url);
    var q = req.params.q;

    User.find({username: {$regex : ".*" + q + ".*", $options: 'i'}}, function(err, users) {
      Post.find({hashtags: {$regex : ".*" + q + ".*", $options: 'i'}})
      .populate('user')
      .exec(function(err, posts) {
        res.json({
          people: users,
          tags: posts
        });
      });
    });
  });
}
