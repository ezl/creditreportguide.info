var hideAnnotation = function(el) {
    // console.log("hide! not data content!", el.attr("data-content"));
    $('[data-annotation]').fadeOut();
};

var showAnnotation = function(el) {
    // console.log("DATA CONTENT", el.attr("data-content"));
    $('[data-annotation]').hide();
    var key = el.attr("data-content");
    var target = $('[data-annotation=' + key + ']');
    target.fadeIn();
};

$(document).ready(function () {
    $('[data-content]').mouseenter(function() {
        var el = $(this);
        showAnnotation(el);
    });
    $('[data-content]').mouseleave(function() {
        var el = $(this);
        hideAnnotation(el);
    });

    $('*').bind("click ", function(event) {
        var el = $(this);
        if (el.attr("data-content") != undefined) {
            showAnnotation(el);
            $('.row-offcanvas').addClass('active');
            event.stopPropagation();
        } else {
            hideAnnotation(el);
            $('.row-offcanvas').removeClass('active');
        }
    });
});


