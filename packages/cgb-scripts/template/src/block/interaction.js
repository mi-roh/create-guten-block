/**
 * JS for the Frontend
 */

const ready = handler => {
	if ( document.readyState !== 'loading' ) {
		handler();
	} else {
		document.addEventListener( 'DOMContentLoaded', handler );
	}
};

ready( () => {
	const blocks = document.getElementsByClassName( 'wp-block-cgb-block-<% blockName % >' );

	if ( blocks.length <= 0 ) {
		return;
	}

	for ( let block = 0; block < blocks.length; block++ ) {
		blocks[ block ].addEventListener( 'click', () => {
			window.alert( 'clicked a "<% blockName %>" Block' );
		} );
	}
} );
