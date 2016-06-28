picshareApp.controller('RegisterController',
function($scope, $location, $window, User, Authentication) {
  if ($window.localStorage['login-token']) {
    $location.path('/');
  }

  $scope.user = new User();

  $scope.submit = function() {
    $scope.user.$save().then(function(resource) {
      if (resource.token) {
        Authentication.saveToken(resource.token);
        $window.location.reload(true);
      } else {
        alert('Failed: Username already exists.');
      }
    });
  }
});
