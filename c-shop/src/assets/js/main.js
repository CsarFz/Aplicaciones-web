const $ = require('jquery');

$(document).ready(function () {
	/*------------------
		Category menu
	--------------------*/
	$('.category-menu > li').hover(function (e) {
		$(this).addClass('active');
		e.preventDefault();
	});
	$('.category-menu').mouseleave(function (e) {
		$('.category-menu li').removeClass('active');
		e.preventDefault();
	});

	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});

	/*------------------
		Back to top
	--------------------*/
	let btn = $('#backToTop');

	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, '300');
	});
})