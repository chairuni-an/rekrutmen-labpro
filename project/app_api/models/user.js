'use strict';

var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;
var userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  bio: String,
  avatar: String,
  hash: String,
  salt: String,
  notif: [{
    img: String,
    url: String,
    msg: String,
    date: Date
  }],
  newNotif: Number,
  following: [ String ],
  followers: [ String ],
  auth: {
    twitter: {
      token: String,
      secret: String
    }
  },
  posts: [ {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    username: this.username,
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000)
  }, '1234567890QWERTY');
};

module.exports = mongoose.model('User', userSchema)
