picshareApp.factory('Follow', function($resource) {
  return $resource('api/users/:username/follow/:followed');
})
