'use strict';

var twitterAPI = require('node-twitter-api');

function createTweet(desc, postID) {
  var tweet = 'picshare.com:3000/posts/' + postID;
  if (!desc) {
    desc = 'I just posted a picture, check it out!'
  } else if (desc.length > 90) {
    desc = desc.substr(0, 87) + '...';
  }
  tweet = desc + ' ' + tweet;
  return tweet;
}

module.exports = function(router) {
  var twitter = new twitterAPI({
    consumerKey: 'Ehx6pkDjb4aHfGq6x05q55ZsZ',
    consumerSecret: '3AgKnxY6Hqat96eLoNjG7TH7HqioD03HvsHImqQ3Tl1AiQs2ZK',
    callback: 'http://picshare.com:3000/auth/twitter'
  });

  var _requestSecret;

  router.get('/request-token', function(req, res) {
    twitter.getRequestToken(function(err, requestToken, requestSecret) {
      if (err)
        res.status(500).send(err);
      else {
        console.log('Requesting Twitter OAuth token...');
        _requestSecret = requestSecret;
        res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
      }
    });
  });

  router.get("/access-token", function(req, res) {
    var requestToken = req.query.oauth_token,
    verifier = req.query.oauth_verifier;

    twitter.getAccessToken(requestToken, _requestSecret, verifier, function(err, accessToken, accessSecret) {
      if (err)
        res.status(500).send(err);
      else
        res.json({
          token: accessToken,
          secret: accessSecret
        })
    });
  });

  router.post("/tweet", function(req, res) {
    var postID = req.body.postID;
    var desc = req.body.desc;
    var accessToken = req.body.token;
    var accessTokenSecret = req.body.secret;

    var tweet = createTweet(desc, postID);
    twitter.statuses("update", {
      status: tweet
    },
    accessToken,
    accessTokenSecret,
    function(error, data, response) {
      if (error) {
        console.log("Error: Failure at posting tweet.");
      } else {
        console.log("Tweet is successfully sent.");
        res.json({success: true});
      }
    }
);
  });
}
