// Adjusting each profile image's size
var adjustPost = function() {
  // For profile picture
  var $imageDiv = $('.image-div');
  var $descDiv = $('.desc-div');
  $imageDiv.height($imageDiv.width());
  $descDiv.height($imageDiv.height());
  if ($(window).width() < 768) {
    $descDiv.width($imageDiv.height());
  } else {
    $descDiv.width(335);
  }
};
setTimeout(adjustPost, 200);
$(window).resize(adjustPost);
