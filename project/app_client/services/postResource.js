picshareApp.factory('Post', function($resource) {
  return $resource('api/posts/:id');
})
