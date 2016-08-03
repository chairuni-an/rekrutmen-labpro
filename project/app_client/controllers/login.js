picshareApp.controller('LoginController',
function($scope, $http, $location, $window, Authentication) {
  $scope.isRejected = false;
  if ($window.localStorage['login-token']) {
    $location.path('/');
  }

  $scope.submit = function() {
    Authentication
    .login($scope.user)
    .then(function() {
      $window.location.reload(true);
    })
    .catch(function(error) {
      $scope.isRejected = true;
    });
  }
});
