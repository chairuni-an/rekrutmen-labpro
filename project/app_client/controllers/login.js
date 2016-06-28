picshareApp.controller('LoginController',
function($scope, $http, $location, $window, Authentication) {
  if ($window.localStorage['login-token']) {
    $location.path('/');
  }

  $scope.submit = function() {
    Authentication
    .login($scope.user)
    .then(function() {
      console.log('Ctrl');
      $window.location.reload(true);
    });
  }
});
