picshareApp.controller('NavController', function($scope, $window, Authentication) {
  //Authentication.logout();
  $scope.isLoggedIn = Authentication.isLoggedIn();
  $scope.currentUser = Authentication.getCurrentUser();
  $scope.logout = Authentication.logout;
});
