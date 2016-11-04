picshareApp.controller('PostController', function($scope, $q, $location, Comment, DateFormat,
                                                  Post, User, Like, Authentication) {
  var params = $location.path().split('/');

  function checkIfLiked() {
    return $scope.post.likes.indexOf(Authentication.getCurrentUser()) !== -1;
  }

  Post.get({ id: params[2] })
  .$promise.then(function(post) {
    if (post.error) {
      return $location.path('error');
    }
    post.time = DateFormat.postTime(post.date);
    post.date = String(new Date(post.date));
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
        $scope.likers = undefined;
      });
    }
  }

  $scope.unlike = function() {
    var currUser = Authentication.getCurrentUser();
    Like.delete({ id: $scope.post._id, username: currUser}, {})
    .$promise.then(function(post) {
      $scope.post.likes = post.likes;
      $scope.isLiked = checkIfLiked();
      $scope.likers = undefined;
    });
  }

  $scope.getLikers = function(post) {
    if (!$scope.likers) {
      var promises = [];
      var likers = [];
      for (let i = 0; i < post.likes.length; i++) {
        var promise = User.get({username: post.likes[i]})
        .$promise.then(function(user) {
          likers.push(user);
        });
        promises.push(promise);
      }
      $q.all(promises).then(function(results) {
        $scope.likers = likers;
        console.log($scope.likers);
      })
    }
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
        $scope.desc = "";
      });
    }
  }
});
