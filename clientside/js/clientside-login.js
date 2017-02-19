/*!
 * This file is part of: Clientside
 * Author: Berend de Jong
 * Author URI: http://frique.me/
 * Version: 1.5.0 (2016-10-23 01:39)
 */

jQuery( function( $ ) {

	"use strict";

	// Add placeholders to inputs
	$( 'label' ).each( function() {

		var $this = $( this );
		var text = $this.text().trim();
		var $input = $this.children( 'input' ).not( '[type="checkbox"]' );

		// If the placeholder is not already set
		if ( ! $input.attr( 'placeholder' ) ) {
			$input.attr( 'placeholder', text );
		}

	} );

	// Login form: auto-check "Remember me"
	$( '#rememberme' ).prop( 'checked', true );

} );