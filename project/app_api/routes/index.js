'use strict';

var express = require('express');
var router = express.Router();

require('./user')(router);
require('./login')(router);
require('./post')(router);
require('./follow')(router);
require('./like')(router);
require('./comment')(router);
require('./twitter')(router);
require('./checkDuplicate')(router);
require('./search')(router);

module.exports = router
