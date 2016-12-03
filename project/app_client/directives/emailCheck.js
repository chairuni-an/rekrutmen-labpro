picshareApp.directive('emailcheck', function($q, CheckDuplicate, Authentication) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.emailcheck = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return $q.resolve();
        }

        var def = $q.defer();
        CheckDuplicate.checkEmail(modelValue).then(function(res) {
          if (res.data.email == undefined) {
            def.resolve();
          } else if (res.data.email == Authentication.getCurrentEmail()) {
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
