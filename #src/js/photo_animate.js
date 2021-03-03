$(window).scroll(function() {
	var height = $(window).scrollTop();
	/*Если сделали скролл на 100px задаём новый класс для header*/
	if (height > 100) {
		$('.header__info_photos').addClass('animate');
	}
})