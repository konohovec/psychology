jQuery(document).ready(function($) {
	$('.header__nav_burger_menu').click(function(event) {
		$('.menu__burger, .top_line_burger, .bottom_line_burger, .wrapper, .header__title_name, .header__title_name_small, body').toggleClass('show_burger');
	});
})