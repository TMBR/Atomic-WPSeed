<?php

// Creates custom post type
// http://codex.wordpress.org/Function_Reference/register_post_type

add_action( 'init', 'create_post_type' );

	function create_post_type() {


	register_post_type( 'dealers',
			array (	'label' => 'Dealers',
				'description' => 'Dealers',
				'public' => true,
				'show_ui' => true,
				'show_in_menu' => true,
				'capability_type' => 'post',
				'hierarchical' => true,
				'has_archive' => false,
				'rewrite' => true,
				'query_var' => true,
				'supports' => array('title','editor','thumbnail','page-attributes','custom-fields'),
				'taxonomies' => array(),
				'menu_icon' => 'dashicons-megaphone',

				'labels' =>
					array (
	  					'name' => 'Dealers', /* This is the Title of the Group */
	  					'singular_name' => 'Dealer', /* This is the individual type */
						'menu_name' => 'Dealers', /* The add new menu item */
						'add_new' => 'Add Dealer', /* Add New Display Title */
						'add_new_item' => 'Add New Dealer',
						'edit' => 'Edit', /* Edit Dialog */
						'edit_item' => 'Edit Dealer', /* Edit Display Title */
						'new_item' => 'New Dealer', /* New Display Title */
						'view_item' => 'View Dealers', /* View Display Title */
						'search_items' => 'Search Dealers', /* Search Custom Type Title */
						'not_found' => 'No Dealers Found', /* This displays if there are no entries yet */
						'not_found_in_trash' => 'No Dealers Found in Trash' /* This displays if there is nothing in the trash */
						),
			)
	); // End Packages Post type

}
