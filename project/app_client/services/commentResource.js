picshareApp.factory('Comment', function($resource) {
  return $resource('api/posts/:id/comments/:cid');
});
