// Adjusting each profile image's size
var adjust = function() {
  // For profile picture
  var $profpic = $('.profpic');
  var width = $('.picdiv').width();

  $profpic.css('width', width);
  $profpic.css('height', width);
};
setTimeout(adjust, 200);
$(window).resize(adjust);
