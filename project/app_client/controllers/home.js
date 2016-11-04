picshareApp.controller('Home',
function($scope, $http, $location, $q, $window, Authentication, User, DateFormat) {
  $scope.isLoggedIn = Authentication.isLoggedIn();

  function sortPost(a, b) {
    // Sorts photos from the newest (bigger date)
    if (a.date > b.date)
      return -1;
    if (a.date < b.date)
      return 1;
    return 0;
  };

  if ($scope.isLoggedIn) {
    var posts = [];
    var username = Authentication.getCurrentUser();
    User.get({username: username}).$promise.then(function(user) {
      for (let i = 0; i < user.posts.length; i++) {
        user.posts[i].user = user;
        user.posts[i].time = DateFormat.postTime(user.posts[i].date);
        user.posts[i].date = String(new Date(user.posts[i].date));
        posts.push(user.posts[i]);
      }
      var promises = [];

      // Get the followers
      for (let i = 0; i < user.following.length; i++) {
        var promise = User.get({username: user.following[i]}).$promise.then(function(following) {
          for (let j = 0; j < following.posts.length; j++) {
            following.posts[j].user = following;
            following.posts[j].time = DateFormat.postTime(following.posts[j].date);
            posts.push(following.posts[j]);
          }
        });
        promises.push(promise);
      };

      $q.all(promises).then(function(results) {
        if (posts.length == 0) {
          $scope.noposts = true;
        }
        posts.sort(sortPost);
        for (let i = 0; i < posts.length; i++) {
          posts[i].date = String(new Date(posts[i].date));
        }
        $scope.posts = posts;
      });
    });
  }
});
