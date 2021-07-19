<?php
/**
 * Plugin Name:       Geo-Detection for Cookie Bar
 * Plugin URI:        https://github.com/k-latte/geo-cookie-bar
 * Description:       This plugin displays or hides the cookie notice depending on geolocation.
 * Version:           0.1
 * Author:            @k-latte
 * Author URI:        https://github.com/k-latte/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       geo-cookie-bar-plugin
 **/

// loads external files to public website
add_action( 'wp_enqueue_scripts', 'gcb_public_scripts' );

function gcb_public_scripts() {

	// register scripts with WordPress's internal library
	wp_register_script('display-cookie-law-info-bar-eu-js', plugins_url('/js/display-cookie-law-info-bar-eu.js',__FILE__), array('jquery'),'',true);
	//wp_register_style('display-cookie-law-info-bar-eu-css', plugins_url('/css/display-cookie-law-info-bar-eu.css',__FILE__));

	// add to que of scripts that get loaded into every page
	wp_enqueue_script('display-cookie-law-info-bar-eu-js');
	//wp_enqueue_style('display-cookie-law-info-bar-eu-css');

}
