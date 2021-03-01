var target = $('.topics__body');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
	var winScrollTop = $(this).scrollTop();
	if(winScrollTop > scrollToElem){
		$('.topics__body').addClass('another_bg');
	}  
});