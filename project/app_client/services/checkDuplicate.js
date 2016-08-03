picshareApp.factory('CheckDuplicate', function($http) {
  return {
    checkUsername: function(username) {
      return $http.get('api/checkUsername/' + username);
    },
    checkEmail: function(email) {
      return $http.get('api/checkEmail/' + email);
    }
  }
});
