picshareApp.factory('Comment', function($resource) {
  return $resource('api/comments/:id');
})
