<?php
// Template Name: Dealers

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get parameters from URL
$center_lat = isset($_GET["lat"]) ? $_GET["lat"] : "43.587557";
$center_lng = isset($_GET["lng"]) ? $_GET["lng"] : "-110.82764500000002";
$radius 	= isset($_GET["radius"]) ? $_GET["radius"] : "50";
$phone 		= isset($_GET["phone"]) ? $_GET["phone"] : "";
$website 	= isset($_GET["website"]) ? $_GET["website"] : "";

// Start XML file, create parent node
$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

$nearbyLocations = get_nearby_locations($center_lat, $center_lng , $radius);
if (!$nearbyLocations) {
	die("Invalid query.");
}

header("Content-type: text/xml");

// Iterate through the rows, adding XML nodes for each
foreach ($nearbyLocations as $row) {
	$node = $dom->createElement("marker");
	$newnode = $parnode->appendChild($node);
	$newnode->setAttribute("name", $row->post_title);
	$newnode->setAttribute("lat", $row->locationLat);
	$newnode->setAttribute("lng", $row->locationLong);
	$newnode->setAttribute("distance", $row->distance);
	/* TODO :
		Need to either add to the query below to get these fields
		or we need to query based on post ID here to get them

	$newnode->setAttribute("address", $row->address);
	$newnode->setAttribute("phone", $row->phone);
	$newnode->setAttribute("website", $row->website);
	*/

}

echo $dom->saveXML();

// http://wordpress.stackexchange.com/questions/61775/how-to-query-posts-based-on-lat-lng-coordinate-as-post-meta
/* Get locations within a passed in distance from current location
   @param $distance = Miles from current point
   @param $lat = current lat of center point
   @param $long = current longiture of center point
*/
function get_nearby_locations($lat, $long, $distance){
    global $wpdb;
    $nearbyLocations = $wpdb->get_results(
    "SELECT DISTINCT
        loc_lat.post_id,
        loc_lat.meta_key,
        loc_lat.meta_value as locationLat,
        loc_lng.meta_value as locationLong,
        ((ACOS(SIN($lat * PI() / 180) * SIN(loc_lat.meta_value * PI() / 180) + COS($lat * PI() / 180) * COS(loc_lat.meta_value * PI() / 180) * COS(($long - loc_lng.meta_value) * PI() / 180)) * 180 / PI()) * 60 * 1.1515) AS distance,
        wp_posts.post_title
    FROM
        wp_postmeta AS loc_lat
        LEFT JOIN wp_postmeta as loc_lng ON loc_lat.post_id = loc_lng.post_id
        INNER JOIN wp_posts ON wp_posts.ID = loc_lat.post_id
    WHERE loc_lat.meta_key = 'loc_lat' AND loc_lng.meta_key = 'loc_lng'
    HAVING distance < $distance
    ORDER BY distance ASC;"
    );

    if($nearbyLocations){
        return $nearbyLocations;
    }
}
