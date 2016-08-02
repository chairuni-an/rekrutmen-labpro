picshareApp.controller('PostController', function($scope, $location, Comment, Post, Like, Authentication) {
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
    var currUser = Authentication.getCurrentUser();
    if (!currUser) {
      $location.path('login');
    } else {
      Like.save({ id: $scope.post._id, username: currUser}, {})
      .$promise.then(function(post) {
        $scope.post.likes = post.likes;
        $scope.isLiked = checkIfLiked();
      });
    }
  }

  $scope.unlike = function() {
    var currUser = Authentication.getCurrentUser();
    Like.delete({ id: $scope.post._id, username: currUser}, {})
    .$promise.then(function(post) {
      $scope.post.likes = post.likes;
      $scope.isLiked = checkIfLiked();
    });
  }

  $scope.comment = function() {
    var currUser = Authentication.getCurrentUser();
    if (!currUser) {
      $location.path('login');
    } else {
      var comment = {
        id: $scope.post.comments.length,
        username: currUser,
        date: Date.now(),
        body: $scope.desc,
      }
      Comment.save({ id: params[2] }, comment)
      .$promise.then(function(post) {
        $scope.post.comments = post.comments;
      });
    }
  }
});
