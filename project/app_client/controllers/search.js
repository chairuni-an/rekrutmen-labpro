picshareApp.controller('SearchController', function($scope, $window, $location, $http, Authentication, User) {
  $scope.q = $location.url().split('/')[2];

  $scope.selected = 0;

  $http.get('api/search/' + $scope.q).then(function(res) {
    console.log(res);
    $scope.people = res.data.people;
    $scope.posts = res.data.tags;
  });
});
