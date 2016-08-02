picshareApp.controller('AuthController',
function($scope, $http, $location, Authentication) {
  var token = $location.search().oauth_token;
  var verifier = $location.search().oauth_verifier;
  $http.get('api/access-token' + '?oauth_token=' + token + '&oauth_verifier=' + verifier)
  .then(function(res) {
    var secret = res.data.secret;
    var token = res.data.token;

    var username = Authentication.getCurrentUser();
    $http.post('api/users/' + username + '/twitter', {
      token: token,
      secret: secret
    })
    .then(function(res) {
      $location.search({});
      $location.path('account');
    })
  });
});
