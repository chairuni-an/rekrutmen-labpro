picshareApp.controller('ProfileController', function($scope, $window, $location, User,
                                                    Follow, Upload, Authentication) {
  var username = $location.path().substring(1);

  function checkIfFollowed() {
    if ($scope.user.followers.indexOf(Authentication.getCurrentUser()) == -1) {
      return false;
    }
    return true;
  }

  $scope.isCurrentUser = Authentication.getCurrentUser() == username;

  User.get({username: username}).$promise.then(function(user) {
    if (!user.username) {
      $location.path('error');
    } else {
      $scope.user = user;
      $scope.isFollowed = checkIfFollowed();
    }
  });

  $scope.setUrl = function(post) {
    console.log(post);
    var url =  'posts/' + post['_id'];
    $location.path(url);
  }

  $scope.upload = function(file, desc) {
      Upload.upload({
          url: '/api/posts',
          data: {file: file, user_id: $scope.user._id, desc: desc}
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

  $scope.follow = function() {
    if (!Authentication.getCurrentUser()) {
      $location.path('login');
    } else {
      Follow.save({
        username: Authentication.getCurrentUser(),
        followed: username
      }, { }).$promise.then(function(user) {
        console.log(user);
        $scope.user.following = user.following;
        $scope.user.followers = user.followers;
        $scope.isFollowed = checkIfFollowed();
      });
    }
  }

  $scope.unfollow = function() {
    Follow.delete({
      username: Authentication.getCurrentUser(),
      followed: username
    }, { }).$promise.then(function(user) {
      console.log(user);
      $scope.user.following = user.following;
      $scope.user.followers = user.followers;
      $scope.isFollowed = checkIfFollowed();
    });
  }
});
