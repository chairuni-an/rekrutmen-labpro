picshareApp.controller('NavController', function($scope, Authentication) {
  //Authentication.logout();
  $scope.isLoggedIn = Authentication.isLoggedIn();
  $scope.currentUser = Authentication.getCurrentUser().username;
});
