$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('sticky');
  } else {
    $('.navbar').removeClass('sticky');
  }
});
