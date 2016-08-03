picshareApp.factory('User', function($resource) {
  return $resource('api/users/:username', null,
      {
        'update': { method: 'PUT' }
      });
})
