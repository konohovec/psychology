$(window).scroll(function() {
	var height = $(window).scrollTop();
	/*Если сделали скролл на 100px задаём новый класс для header*/
	if (height > 100) {
		$('.header__list').addClass('hidden');
		$('.header__title_name').addClass('hidden');
		$('.header__title_name_small').addClass('hidden');
		$('.header__nav_burger').addClass('show');
	} else {
		/*Если меньше 100px удаляем класс для header*/
		$('.header__list').removeClass('hidden');
		$('.header__title_name').removeClass('hidden');
		$('.header__title_name_small').removeClass('hidden');
		$('.header__nav_burger').removeClass('show');
	}
});
