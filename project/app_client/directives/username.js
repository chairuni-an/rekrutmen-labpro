picshareApp.directive('username', function($q, CheckDuplicate, Authentication) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.username = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return $q.resolve();
        }

        var def = $q.defer();
        CheckDuplicate.checkUsername(modelValue).then(function(res) {
          if (res.data.username == undefined) {
            def.resolve();
          } else if (res.data.username == Authentication.getCurrentUser()) {
            def.resolve();
          } else {
            def.reject();
          }
        });

        return def.promise;
      };
    }
  };
});
