picshareApp.controller('NavController', function($scope, $window, $location, Authentication) {
  //Authentication.logout();
  $scope.isLoggedIn = Authentication.isLoggedIn();
  $scope.currentUser = Authentication.getCurrentUser();
  $scope.logout = Authentication.logout;
  $scope.redirect = function(username) {
    $location.path(username);
  }
});
