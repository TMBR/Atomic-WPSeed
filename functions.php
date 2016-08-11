<?php
/**
 * Main Functions File - used for:
 * • including other function-files
 * • WP-Support & WP-Setup
 * • general functions like replacements, translations
 *
 * @author      Flurin Dürst
 * @version     1.3
 * @since       WPSeed 0.1
 *
 */

/* ACCESS CONTROL
/===================================================== */
  require('functions/functions-access.php');


/* DEVELOPER TOOLKIT
/===================================================== */
  require('functions/functions-dev.php');


/* WP SETUP & SETTINGS
/===================================================== */
  require('functions/functions-wpsetup.php');


/* BACKEND
/===================================================== */
  require('functions/functions-backend.php');

/* theme
/===================================================== */
  require('functions/functions-theme.php');
  require('functions/functions-post-type.php');

/* PLUGIN RELATED
/===================================================== */
  // Elements for ACF Flexible Content
  // » https://www.advancedcustomfields.com/resources/flexible-content/
  require('functions/functions-elements.php');

function my_acf_init() {
	acf_update_setting('google_api_key', 'AIzaSyBtXuxMYLMKf4UFvQDaYNOAtNMTV9qa2-w');
}
add_action('acf/init', 'my_acf_init');

/*
  MOVE the ACF lat long fields out of an array into unique fields when post is saved

  @param : ACF Field google map field slug must be 'dealer_location'
*/
function tmbr_update_latlon($post_id, $post, $update) {

	$map = get_post_meta($post_id, 'dealer_location', true);

	if (!empty($map)) {
	    update_post_meta( $post_id, 'loc_lat', $map['lat'] );
	    update_post_meta( $post_id, 'loc_lng', $map['lng'] );
	}

}
add_action('save_post', 'tmbr_update_latlon', 90, 3);


?>
