'use strict';

var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
  username: String,
  img: {
    type: String,
    unique: true,
    required: true
  },
  date: Date,
  comments: [{
    username: String,
    date: Date,
    body: String
  }],
  likes: [ String ]
});

module.export = mongoose.model('Post', postSchema);
