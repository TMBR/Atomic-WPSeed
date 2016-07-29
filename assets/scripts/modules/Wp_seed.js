/**
 * All sorts javascript/jQuery functions go here
 *
 * @author      Flurin Dürst
 * @version     3.1
 * @since       WPSeed 0.12
 *
 */
/* Functions
/===================================================== */
var WPseed = function($) { // ----- static module
    var _init = function() {
        /* Hamburger switch
		/------------------------*/
        $(document).on('click', '#hamburger', function(event) {
            // show overlay
            $('#nav_main').toggleClass('hiddenmobile');
            // switch icon
            $('#hamburger').toggleClass('is-active');
            // prevent content scrolling
            $('html').toggleClass('noscroll');
        });
        /* Initialize Fastclick
		/------------------------*/
        // » https://github.com/ftlabs/fastclick
        FastClick.attach(document.body);
    };
    // output/public     
    return {
        init: _init
    };
}(jQuery);