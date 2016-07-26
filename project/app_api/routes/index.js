'use strict';

var express = require('express');
var router = express.Router();

require('./user')(router);
require('./login')(router);
require('./post')(router);
require('./follow')(router);
require('./like')(router);

module.exports = router
