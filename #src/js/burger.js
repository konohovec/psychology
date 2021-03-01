jQuery(document).ready(function($) {
	$('.header__nav_burger').click(function(event) {
		$('.top_line, .bottom_line, .header__list').toggleClass('active');
	});
	$('.span').click(function(event) {
		$('.top_line, .bottom_line, .header__list').toggleClass('active');
	});
});
$(window).scroll(function() {
	var height = $(window).scrollTop();
	/*Если сделали скролл на 100px задаём новый класс для header*/
	if (height > 100) {
		$('.header__nav_burger').addClass('show');
	} else {
		/*Если меньше 100px удаляем класс для header*/
		$('.header__nav_burger').removeClass('show');
	}
})