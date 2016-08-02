picshareApp.controller('AccountController', function($scope, $window, $location,
                                                    $http, Authentication, User) {
  if (!Authentication.isLoggedIn()) {
    return $location.path('login');
  };

  User.get({username: Authentication.getCurrentUser()}).$promise.then(function(user) {
    $scope.user = user;
    if (!user.auth.twitter) {
      $scope.twitter = false;
    } else {
      $scope.twitter = true;
    }
  });

  if (!$location.search().selected) {
    $scope.selected = 0;
  } else {
    $scope.selected = $location.search().selected;
  }
});
