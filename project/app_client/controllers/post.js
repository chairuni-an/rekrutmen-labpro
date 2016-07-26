picshareApp.controller('PostController', function($scope, $location, Post, Like, Authentication) {
  var params = $location.path().split('/');

  function checkIfLiked() {
    return $scope.post.likes.indexOf(Authentication.getCurrentUser()) !== -1;
  }

  Post.get({ id: params[2] })
  .$promise.then(function(post) {
    $scope.post = post;
    $scope.isCurrentUser = Authentication.getCurrentUser() == post.user.username;
    $scope.isLiked = checkIfLiked();
  });

  $scope.deletePost = function() {
    Post.delete({ id: params[2]} ).$promise.then(function(res) {
      $location.path(Authentication.getCurrentUser());
    });
  }

  $scope.like = function() {
    Like.save({ id: $scope.post._id, username: $scope.post.user.username}, {})
    .$promise.then(function(post) {
      $scope.post.likes = post.likes;
      $scope.isLiked = checkIfLiked();
    });
  }

  $scope.unlike = function() {
    Like.delete({ id: $scope.post._id, username: $scope.post.user.username}, {})
    .$promise.then(function(post) {
      $scope.post.likes = post.likes;
      $scope.isLiked = checkIfLiked();
    });
  }

  $scope.comment = function() {
    Comment.save();
  }
});
