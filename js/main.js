$(document).ready(function(){


    $('.show_hide').showHide({
        speed: 1200,  // speed you want the toggle to happen
        easing: 'linear',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
        speedUp: 200,

    });


});

(function ($) {

    $.fn.showHide = function (options) {

        var defaults = {
            speed: 1500,
            easing: 'linear',
            speedUp: 2000,
        };

        var options = $.extend(defaults, options);
        var inverted_header = $('.inverted_show_hide');
        var toggledDiv = '';
        $(this).click(function () {

            $('.toggleDiv').slideUp(options.speed, options.easing);
            var toggleClick = $(this);
            var toggleDiv = $(this).attr('rel');

            if(String(toggleDiv) === String(toggledDiv)){
                //$(inverted_header).slideToggle(options.speed, options.easing);
            } else {
                //$(inverted_header).slideUp(options.speed, options.easing);
                //
                $(toggledDiv).fadeOut(options.speed/6);
                $(toggledDiv).slideUp(options.speedUp, options.easing);
                toggledDiv = toggleDiv;
            }
            $(toggleDiv).slideToggle(options.speed, options.easing);

            return false;

        });

    };
})(jQuery);
