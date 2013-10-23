(function($, undefined) {
    "use strict";

    var $win = $(window),
        $body = $("#wrap"),
        $panels = $("section"),
        handleResize = function() {
            var panelHeight = $win.height();

            $panels.height(panelHeight);

            $body.scrollTop(Math.round($body.scrollTop() / panelHeight) * panelHeight);
        };

    $win.on("resize", handleResize);
    handleResize();

    $(".scrollable").on("click", function(e) {
        e.stopPropagation();
        e.preventDefault();

        var $target = $($(this).attr("href"));

        $body.stop().animate({
            scrollTop: $body.scrollTop() + $target.offset().top
        }, 1000, "easeInOutQuint");
    });

    window.scrollTo(0,0);
})(window.jQuery);