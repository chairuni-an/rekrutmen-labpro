picshareApp.controller('RegisterController', function($scope, User) {
  $scope.user = new User();

  $scope.submit = function() {
    $scope.user.$save().then(function(res) {
      console.log(res);
      if (res.results === 'Success') {
        alert('Success');
      } else {
        alert('Failed: username already exists');
      }
    })
  }
});
