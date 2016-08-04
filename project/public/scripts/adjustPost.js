// Adjusting each profile image's size
var adjustPost = function() {
  // For profile picture
  var $imageDiv = $('.image-div');
  var $descDiv = $('.desc-div');
  $imageDiv.height($imageDiv.width());
};
setTimeout(adjustPost, 200);
$(window).resize(adjustPost);
