// TMBR Creative Agency
// Date: 6.27.2016

// Dependent Upon
// - jQuery
// - Util
// - Constants
// Module(s) (static)
// - Slider
//
// ** Requires Parent element passed
// To find more properties: - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties

var Slider = function() { // ----- static module
    // private var(s)

    // getter(s/setter(s) values 
    // for more options, check out : https://www.woothemes.com/flexslider/   
    var __options = {
        namespace:          "flex-",
        animation:          "slide",
        slideshow:          false, // auto play on load
        slideshowSpeed:     4000,
        animationSpeed:     600,
        pauseOnHover:       true,
        controlNav:         true, //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav:       true, //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText:           "Previous",
        nextText:           "Next",
        randomize:          false,
        touch:              true,
        video:              false
    };

    // private method(s)
    var _init = function() {

        /* Set all of the values from the 'options' object */
        $('#home-slider').flexslider({
            namespace: __options.namespace,
            animation: __options.animation,
            slideshow: __options.slideshow,
            slideshowSpeed: __options.slideshowSpeed,
            animationSpeed: __options.animationSpeed,
            pauseOnHover: __options.pauseOnHover,
            controlNav: __options.controlNav,
            directionNav: __options.directionNav,
            prevText: __options.prevText,
            nextText: __options.nextText,
            randomize: __options.randomize,
            touch: __options.touch,
            video: __options.video
        });

        console.log("Slider.init");
    };

    // getter(s)/setter(s) methods
    var _set = function(options) {
        for (var property_name in options) {
            if (options.hasOwnProperty(property_name)) {
                var property_value = options[property_name];
                if(__options.hasOwnProperty(property_name)) {
                    __options[property_name] = property_value;
                } else {
                    Util.log('Options.set() to a property that is not expected');
                    Util.log('property_name:',property_name,'property_value:',property_value);
                }
            }
        }
    };

    var _get = function() {
        return __options;
    };


    // output/public     
    return {
        init: _init,
        set: _set,
        get: _get,
    };
}(jQuery);