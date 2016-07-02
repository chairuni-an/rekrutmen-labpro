picshareApp.controller('PostController', function($scope, $location, Post) {
  var params = $location.path().split('/');

  $scope.post = Post.get({
    id: params[2]
  });
  console.log($scope.post);
});
