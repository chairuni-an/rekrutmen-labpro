picshareApp.controller('AccountController', function($scope, $window, $location,
                                                    $http, Authentication, User, Upload) {
  if (!Authentication.isLoggedIn()) {
    return $location.path('login');
  };

  $scope.usernameAvailable = true;

  User.get({username: Authentication.getCurrentUser()}).$promise.then(function(user) {
    $scope.user = user;
    if (!user.auth) {
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

  // Update user
  $scope.uploadAvatar = function(file) {
    Upload.upload({
      url: '/api/users/' + Authentication.getCurrentUser() + '/avatar',
      data: {file: file}
    }).then(function (resp) {
      $scope.imageChanged = true;
      $scope.user.avatar = resp.data.user.avatar;
    }, function (resp) {
      console.log('Error status: ' + resp.status);
    });
  }

  $scope.changeProfile = function() {
    User.update({
      username: Authentication.getCurrentUser()
    },
    {
      bio: $scope.user.bio,
      email: $scope.user.email,
      fullname: $scope.user.fullname,
      username: $scope.user.username
    }).$promise.then(function(data) {
      Authentication.saveToken(data.token);
      $window.location.reload();
    });
  }

  $scope.checkPass = function(newPass, confirmPass) {
    $scope.confirmed = newPass === confirmPass;
  }

  $scope.changePassword = function(oldPass, newPass) {
    $http.put('api/users/' + Authentication.getCurrentUser() + '/password', {
      oldPass: oldPass,
      newPass: newPass
    }).then(function(res) {
      console.log(res);
      $scope.passStatus = res.data.status;
    });
  }
});
