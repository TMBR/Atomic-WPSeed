// TMBR Creative Agency
// Date: 6.27.2016

// Dependent Upon
// - jQuery
// - Util
// - Constants
// Module(s) (static)
// - Lightbox
//
//

var Lightbox = function(element) { // ----- static module
    // private var(s)
    

    // private method(s)
    var _init = function() {
        $('.imagepop').magnificPopup({type:'image'});

        // Flex Content image gallery with modal
        $('.js-flex-gallery-img').magnificPopup({
            type: 'image',
            gallery:{
                enabled:true
            }
        });

        Util.log("Lightbox.init");
    };

    // output/public     
    return {
        init: _init
    };
}(jQuery);
