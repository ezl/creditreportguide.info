$(document).ready(function () {
  $('[data-content]').mouseenter(function() {
      $('[data-annotation]').hide();
      key = $(this).attr("data-content");
      target = $('[data-annotation=' + key + ']');
      target.show();
  });
  $('[data-content]').mouseleave(function() {
      $('[data-annotation]').fadeOut();
  });

  $('.hide-offcanvas').bind("touchend", function() {
      $('[data-annotation]').fadeOut();
      $('.row-offcanvas').removeClass('active');
  });
  $('[data-content]').bind("touchend", function() {
      $('[data-annotation]').hide();
      key = $(this).attr("data-content");
      target = $('[data-annotation=' + key + ']');
      target.show();
      $('.row-offcanvas').addClass('active');
  });
});
