$(document).ready(function() {
  $('.main_btna, .main_btn, .main_nav ul li:eq(1)').on('click', function() {
    $('.overlay').fadeToggle();
    $('.modal').slideToggle();
  });
  $('.close').on('click', function() {
    $(this).parent().fadeOut();
    $('.overlay').fadeToggle();
  });
});