// TMBR Creative Agency
// Date: 6.27.2016

// Dependent Upon
// - jQuery
// Module(s) (static)
// - SmoothScroll
//
//

var SmoothScroll = function($) { // ----- static module
    // private var(s)

    // private method(s)
    var _init = function() {
    	$('a[href*=#]:not([href=#])').on('click','', function( e ) {
			e.preventDefault();

			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

				if (target.length) {
					$('html,body').animate(
						{ scrollTop: target.offset().top },
						{ duration: 600, easing:'easeOutCubic'}
					);
					return false;
				}

			}

		});

    	console.log("SmoothScroll.init");
    };



    // output/public     
    return {
        init: _init
    };
}(jQuery);