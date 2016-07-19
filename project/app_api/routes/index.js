'use strict';

var express = require('express');
var router = express.Router();

require('./user')(router);
require('./login')(router);
require('./post')(router);

module.exports = router
