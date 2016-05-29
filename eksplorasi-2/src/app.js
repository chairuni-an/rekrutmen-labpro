var express = require('express');
var app = express();
var users = require('./users.json');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use('/static', express.static(__dirname + '/public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res, next) => {
  if (req.query.username === undefined) {
    next();
  } else {
    res.redirect('/' + req.query.username);
  }
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server started.');
});

app.get('/:username', (req, res) => {
  var username = req.params.username;
  var user = users[username];
  if (user === undefined) {
    res.render('error', {
      username: username
    });
  } else {
    res.render('profile', {
      user: user
    });
  }
});
