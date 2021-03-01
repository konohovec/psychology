jQuery(document).ready(function($) {
	$('.header__connection').click(function(event) {
		$('.callbackmodal, body').toggleClass('show_modal');
	});
	$('.callback__other_callback').click(function(event) {
		$('.callbackmodal, body').toggleClass('show_modal');
	});
	$('.callbackmodal__close').click(function(event) {
		$('.callbackmodal, body').toggleClass('show_modal')
	});
	$('.callbackmodal__btn').click(function(event) {
		$('.callbackmodal__form_item_send, .callbackmodal__email, .callbackmodal__name, .callbackmodal__message, .callbackmodal__btn').addClass('send')
	});
})