picshareApp.directive('emailCheck', function($q, CheckDuplicate, Authentication) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.emailCheck = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return $q.reject('Cannot be empty');
        }

        var def = $q.defer();
        CheckDuplicate.checkUsername(modelValue).then(function(res) {
          if (res.data.email == undefined) {
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
