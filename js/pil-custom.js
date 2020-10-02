$(function(){
	
	/**
	 * Menu height on large screens, break point
	 */
	(function () {
		$( 'head' ).append( '<style type="text/css" id="main-nav-css"></style>' );

		var $menu = $( '.js-main-nav' ),
			$css = $( '#main-nav-css' );

		if ( ! $menu || ! $css ) {
			return;
		}

		var isMultilineMenu = function () {
			return $menu.height() > 45;
		};

		var updateMenuStyle = function () {
			if ( Modernizr.mq( '(min-width: 1200px)' ) && isMultilineMenu() ) {
				var lines = Math.round( $menu.height() / 60 );
				$css.text( '@media (min-width: 1200px) { .header__container::before { bottom: ' + (lines * 60 - 30) + 'px; } .header__container::after { bottom: ' + (lines * 60 ) + 'px; } }' );
			}
			else if ( Modernizr.mq( '(min-width: 992px)' ) && isMultilineMenu() ) {
				$css.text( '@media (min-width: 992px) { .header__container::before, .header__container::after { bottom: ' + $menu.height() + 'px; } }' );
			}
			else {
				$css.text( '' );
			}
		};

		updateMenuStyle();
		$( window ).on( 'resize', _.debounce( updateMenuStyle, 250 ) );
	})();
	
	
})