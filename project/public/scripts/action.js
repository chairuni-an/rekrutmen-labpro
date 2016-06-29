$('#signup').click(() => {
  alert('Sorry, the sign up page isn\'t ready yet :(');
});

// Adjusting each profile image's size
var adjust = function() {
  // For profile picture
  var $profpic = $('.profpic');
  var width = $('.picdiv').width();
  $profpic.css('width', width);
  $profpic.css('height', width);
};
adjust();
$(window).resize(adjust);
