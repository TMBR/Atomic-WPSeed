// TMBR Creative Agency
// Date: 6.27.2016

// Dependent Upon
// - jQuery
// Module(s) (static)
// - Preloader
//

var Preloader = function($) { // ----- static module
    // private var(s)

    // private method(s)
    var _init = function() {
       $(window).load(function() {
            setTimeout(function() {
                $('.js-sitewrap').animate({
                    opacity: 1
                }, 300);
                $('#preloader').fadeOut(300, function() {
                    Animated.init();
                });
            }, 300); // delay 300 ms
        });

       console.log("Preloader.init");
    };

    // output/public     
    return {
        init: _init
    };
}(jQuery);