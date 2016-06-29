'use strict';

var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  username: String,
  img: {
    type: String,
    unique: true,
    required: true
  },
  desc: String,
  date: Date,
  comments: [{
    username: String,
    date: Date,
    body: String
  }],
  likes: [ String ],
  hashtags: [ String ]
});

module.exports = mongoose.model('Post', postSchema)
