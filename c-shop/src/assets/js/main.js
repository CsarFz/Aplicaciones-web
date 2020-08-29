const $ = require('jquery');

$(document).ready(function () { 
    /*------------------
		Category menu
	--------------------*/
	$('.category-menu > li').hover( function(e) {
		$(this).addClass('active');
		e.preventDefault();
	});
	$('.category-menu').mouseleave( function(e) {
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
})