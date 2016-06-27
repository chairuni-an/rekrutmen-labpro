picshareApp.factory('Post', function($resource) {
  return $resource('api/users/:username/posts/:post');
})
