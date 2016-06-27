picshareApp.factory('User', function($resource) {
  return $resource('api/users/:username');
})
