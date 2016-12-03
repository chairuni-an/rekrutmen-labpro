'use strict'

var User = require('../models/user');

module.exports = function(router) {
  router.get('/checkUsername/:username', function(req, res) {
    console.log('GET Request: ' + req.url);
    var username = req.params.username;
    User.findOne({username: username}, function(err, user) {
      if (err) {
        res.json({username: undefined});
      } else if (!user) {
        res.json({username: undefined});
      } else {
        res.json({username: user.username});
      }
    })
  });

  router.get('/checkEmail/:email', function(req, res) {
    console.log('GET Request: ' + req.url);
    var email = req.params.email;
    User.findOne({email: email}, function(err, user) {
      if (err) {
        res.json({email: undefined});
      } else if (!user) {
        res.json({email: undefined});
      } else {
        res.json({email: user.email});
      }
    })
  });
}
