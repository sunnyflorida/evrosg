(function($) {
    $(function() {
        var jcarousel = $('.jcarousel1');

        jcarousel
            .on('jcarousel1:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 900) {

                    width = width / 5;
                } else if (width >= 350) {
                    width = width / 4;
                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel1-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel1-control-next')
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);

