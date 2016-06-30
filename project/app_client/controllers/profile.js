picshareApp.controller('ProfileController', function($scope, $window, $location, User, Upload, Authentication) {
  var username = $location.path().substring(1);

  $scope.viewImage = false;
  
  $scope.isCurrentUser = Authentication.getCurrentUser() == username;

  User.get({username: username}).$promise.then(function(user) {
    if (!user.username) {
      $location.path('error');
    } else {
      $scope.user = user;
      $scope.image = $scope.getImage();
    }
  });

  $scope.getImage = function() {
    if (!$scope.user.avatar) {
      return '/static/img/noImage.jpeg';
    } else {
      return $scope.user.avatar;
    }
  }

  $scope.upload = function(file, desc) {
      Upload.upload({
          url: '/api/users/' + username + '/posts',
          data: {file: file, desc: desc}
      }).then(function (resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
          $window.location.reload();
          //$window.location.reload();
      }, function (resp) {
          console.log('Error status: ' + resp.status);
      }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
      });
  };
});
