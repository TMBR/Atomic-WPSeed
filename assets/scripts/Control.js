// TMBR Creative Agency
// Author: michael.ross
// Date: 6.27.2016

// Dependent Upon
// - jQuery
// Module(s) (static)
// - Control
//

var Control = function($) { // ----- static module
    // private var(s)

    // private method(s)
    var _init = function() {

        Util.log("Control.init");
        MobileDetect.detect();
        Preloader.init();
        SmoothScroll.init();
        Animated.init();
        Throttle.init();
        Slider.init();
        Lightbox.init();
        MapController.init();
        WPseed.init();
    };

    // output/public     
    return {
        init: _init
    };
}(jQuery);


/* Fire off the doc ready */
jQuery( document ).ready(function() {
    console.log("Document Ready");
    Control.init();
});