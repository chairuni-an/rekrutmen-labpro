var express = require('express');
var app = express();
var users = require('./users.json');

app.use(express.static(__dirname + '/app_client'));
app.use('/static', express.static(__dirname + '/public'));
app.use('/bower', express.static(__dirname + '/bower_components'));
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/app_client/index.html');
});

// respond with "hello world" when a GET request is made to the homepage
/*
app.get('/', (req, res, next) => {
  if (req.query.username === undefined) {
    next();
  } else {
    res.redirect('/' + req.query.username);
  }
});
*/

app.listen(3000, () => {
  console.log('Server started.');
});
