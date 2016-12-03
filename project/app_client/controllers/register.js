picshareApp.controller('RegisterController',
function($scope, $location, $window, User, Authentication) {
  if ($window.localStorage['login-token']) {
    $location.path('/');
  }

  $scope.user = new User();

  $scope.submit = function() {
    $scope.user.$save().then(function(resource) {
      if (!resource.err) {
        $location.path('/thanks');
      } else {
        alert('Failed: Username already exists.');
      }
    });
  }
});
