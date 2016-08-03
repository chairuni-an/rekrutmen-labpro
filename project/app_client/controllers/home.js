picshareApp.controller('Home',
function($scope, $http, $location, $q, $window, Authentication, User) {
  $scope.isLoggedIn = Authentication.isLoggedIn();

  function sortPost(a, b) {
    // Sorts photos from the newest (bigger date)
    if (a.date > b.date)
      return -1;
    if (a.date < b.date)
      return 1;
    return 0;
  };

  function formatTime(dateString) {
    var oneDay = 86400000;
    var date = new Date(dateString);
    var today = new Date();
    if (today.getTime() - date.getTime() < oneDay
        && today.getDate() - date.getDate() == 0) {
      return date.getHours() + ':' + date.getMinutes();
    } else {
      return date.getDate() + '-' + (date.getMonth() + 1) + '-'
              + (1900 + date.getYear());
    }
  }

  if ($scope.isLoggedIn) {
    var posts = [];
    var username = Authentication.getCurrentUser();
    User.get({username: username}).$promise.then(function(user) {
      var promises = [];

      // Get the followers
      for (let i = 0; i < user.following.length; i++) {
        var promise = User.get({username: user.following[i]}).$promise.then(function(following) {
          for (let j = 0; j < following.posts.length; j++) {
            following.posts[j].user = following;
            following.posts[j].time = formatTime(following.posts[j].date);
            posts.push(following.posts[j]);
          }
        });
        promises.push(promise);
      };

      $q.all(promises).then(function(results) {
        posts.sort(sortPost);
        $scope.posts = posts;
      });
    });
  }
});
