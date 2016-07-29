// TMBR Creative Agency
// Author: michael.ross
// Date: 6.27.2016
// Dependent Upon
// - jQuery
// - Google Maps
// Module(s) (static)
// - MapController
//
var MapController = function() { // ----- static module
    // private var
    var map = null;
    var _currentLocation;

    var _init = function() {
        
        // _getUserLocation();
        $('body').find('.acf-map').each(function() {
            // create map
            map = _createMap($(this));
        });

        //
    };

    /*
     *  _getUserLocation
     *
     *  This function will use the HTML5 geolocation to target a user
     *
     *  @param   n/a
     *  @return  n/a
     */
    var _getUserLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(_setPostion);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    var _setPostion = function(position) {
        _currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    };

    /*
     *  _createMap
     *
     *  This function will create a Google Map and fire the marker creation
     *
     *  @param   $el (the map object)
     *  @return  Map Object to private var
     */
    var _createMap = function($el) {
        // TODO - get user location and zipcode lookup
        var $markers = $el.find('.marker');
        var args = {
            zoom: 11,
            center: new google.maps.LatLng(43.479984, -110.762411),
            //center: _currentLocation, 
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        // create map               
        map = new google.maps.Map($el[0], args);
        // add a markers reference
        map.markers = [];
        // add markers
        $markers.each(function() {
            _addMarker($(this), map);
        });
        return map;
    };
    /*
     *  addMarker
     *
     *  This function will add a marker to the selected Google Map
     *
     *  @param   $marker (jQuery element)
     *  @param   map (Google Map object)
     *  @return  n/a
     */
    var _addMarker = function($marker, map) {

        var latlng = new google.maps.LatLng($marker.attr('lat'), $marker.attr('lng'));
        // create marker
        var marker = new google.maps.Marker({
            position: latlng,
            map: map
        });

        // add to array
        map.markers.push(marker);
        // if marker contains HTML, sadd it to an infoWindow
        if ($marker.html()) {
            // create info window
            var infowindow = new google.maps.InfoWindow({
                content: $marker.html()
            });
            // show info window when marker is clicked
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });
        }
    };

    /*
     *  center_map
     *
     *  This function will center the map, showing all markers attached to this map
     *
     *  @param   map (Google Map object)
     *  @return  n/a
     */
    var _center_map = function(map) {
        // vars
        var bounds = new google.maps.LatLngBounds();
        // loop through all markers and create bounds
        $.each(map.markers, function(i, marker) {
            var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
            bounds.extend(latlng);
        });
        // only 1 marker?
        if (map.markers.length == 1) {
            // set center of map
            map.setCenter(bounds.getCenter());
            map.setZoom(16);
        } else {
            // fit to bounds
            map.fitBounds(bounds);
        }
    };


    var _set_up_filters = function() {
        var $filters = $('#filter_locations').find('.location-check');

        $filters.each(function() {
            $(this).on('click', function() {
                alert($this.attr('name'));
            });
        });
    };


    // output/public     
    return {
        init: _init,
        center_map: _center_map
    };
}(jQuery);