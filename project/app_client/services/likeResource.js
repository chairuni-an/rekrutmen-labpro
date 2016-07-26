picshareApp.factory('Like', function($resource) {
  return $resource('api/posts/:id/like/:username');
})
