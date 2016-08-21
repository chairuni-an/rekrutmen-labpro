picshareApp.factory('DateFormat', function($http) {
  return {
    formatHour: function(hour, minute) {
      ans = '';
      if (hour < 10) ans += '0';
      ans += hour + ':';
      if (minute < 10) ans += '0';
      ans += minute;
      return ans;
    },

    postTime: function(dateString) {
      var oneDay = 86400000;
      var date = new Date(dateString);
      var today = new Date();
      if (today.getTime() - date.getTime() < oneDay
          && today.getDate() - date.getDate() == 0) {
        return this.formatHour(date.getHours(), + date.getMinutes());
      } else {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/'
                + (date.getYear() - 100)
      }
    }
  }
});
