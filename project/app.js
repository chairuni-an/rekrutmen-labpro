var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var users = require('./users.json');
var router = require('./app_api/routes')
var passport = require('passport');

require('./app_api/config/db.js');
require('./app_api/config/passport');

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static(__dirname + '/app_client'));
app.use('/static', express.static(__dirname + '/public'));
app.use('/bower', express.static(__dirname + '/bower_components'));
app.use('/api', router);
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/app_client/index.html');
});

app.listen(3000, () => {
  console.log('Server started.');
});
