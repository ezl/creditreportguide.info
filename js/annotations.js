$(document).ready(function () {
  $('[data-content]').mouseenter(function () {
      key = $(this).attr("data-content");
      target = $('[data-annotation=' + key + ']');
      target.show();
  });
  $('[data-content]').mouseleave(function () {
      $('[data-annotation]').fadeOut();
  });
});
