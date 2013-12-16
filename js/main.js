$(document).ready(function(){


    $('.show_hide').showHide({
        speed: 1000,  // speed you want the toggle to happen
        easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
        changeText: 1, // if you dont want the button text to change, set this to 0
        showText: 'View',// the button text to show when a div is closed
        hideText: 'Close' // the button text to show when a div is open

    });


});

(function ($) {

    $.fn.showHide = function (options) {

        //default vars for the plugin
        var defaults = {
            speed: 1000,
            easing: '',
            changeText: 0,
            showText: 'Show',
            hideText: 'Hide'

        };

        var options = $.extend(defaults, options);
        var inverted_header = $('.inverted_show_hide');

        $(this).click(function () {

            $('.toggleDiv').slideUp(options.speed, options.easing);
            // this var stores which button you've clicked
            var toggleClick = $(this);
            // this reads the rel attribute of the button to determine which div id to toggle
            var toggleDiv = $(this).attr('rel');
            // here we toggle show/hide the correct div at the right speed and using which easing effect
            $(toggleDiv).slideToggle(options.speed, options.easing);
            $(inverted_header).slideToggle(options.speed, options.easing);

            // $(inverted_header).slideToggle(options.speed, options.easing, function() {
            //if(options.changeText==1){
            //$(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
            //   }
            //});

            return false;

        });

    };
})(jQuery);
