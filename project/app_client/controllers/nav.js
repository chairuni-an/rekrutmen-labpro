picshareApp.controller('NavController', function($scope, $window, $location, $http, Authentication, User, DateFormat) {
  //Authentication.logout();
  $scope.isLoggedIn = Authentication.isLoggedIn();

  if (Authentication.getCurrentUser()) {
    User.get({username: Authentication.getCurrentUser()}).$promise.then(function(user) {
      $scope.user = user;
      for (var i = 0; i < $scope.user.notif.length; i++) {
        $scope.user.notif[i].time = DateFormat.postTime($scope.user.notif[i].date);
      }
      $scope.noNotif = user.notif.length === 0;
    });
  }

  $scope.logout = Authentication.logout;

  $scope.redirect = function(q) {
    $location.path('search/' + q);
  }

  $scope.resetNotif = function() {
    $http.post('api/users/' + Authentication.getCurrentUser() + '/notif')
    .then(function(res) {
      $scope.user.newNotif = 0;
    });
  }
});
