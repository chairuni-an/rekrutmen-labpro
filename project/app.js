var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var users = require('./users.json');

require('./app_api/config/db.js');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/app_client'));
app.use('/static', express.static(__dirname + '/public'));
app.use('/bower', express.static(__dirname + '/bower_components'));
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/app_client/index.html');
});

app.listen(3000, () => {
  console.log('Server started.');
});

app.post('/api/users/:username?', function(req, res) {
  var User = require('./app_api/models/user.js');

  // Check whether the username does exist
  User.find({'username' : req.body.username}, function(err, todos) {
    if (!err && !todos.length) {
      var user = new User({
        username: req.body.username,
        email: req.body.email,
        fullname: req.body.fullname,
      });
      user.setPassword(req.body.password);
      user.posts = [];
      user.save(function(err, user) {
        res.json({
          results: 'Success'
        });
      });
    } else {
      res.json({ results: 'Failure' });
    }
  });
});
