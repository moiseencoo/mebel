$(document).ready(function () {
	if ($(window).width() < 769) {
		$('.nav .dropdown-toggle').attr('data-toggle', 'none');
		$('.dropdown-toggle').click(function () {
			if ($(this).parent('#dropdown').hasClass('open')) {
				$(this).parent('#dropdown').removeClass('open');
			}
			else {
				$(this).parent('#dropdown').addClass('open');
			}
		});
	}
	else {
		$('.nav .dropdown-toggle').attr('data-toggle', 'dropdown');
	}
});
$(window).scroll(function () {
	if ($(window).scrollTop() > 180 && $(window).width() > 992) {
		$('.navbar').addClass('navbar-fixed-top');
		$('#navbar').removeClass('normal-menu');
		$('#navbar').addClass('fixed-menu');
		$('.navbar-header').show();
		$('.search_form input').removeClass('onTop');
	}
	else {
		$('.navbar').removeClass('navbar-fixed-top');
		$('#navbar').removeClass('fixed-menu');
		$('#navbar').addClass('normal-menu');
		$('.navbar-header').hide();
		$('.search_form input').addClass('onTop');
	}
});
$('.search_icon').click(function () {
	if ($(window).width() < 769) {
		$('#mobile_searchh').toggle();
		$('.search_icon').toggle();
	}
	else {
		$('#desctop_search').toggle();
		$('.search_icon').toggle();
	}
});
$('.m_menu').click(function () {
	$('.navbar').toggle('slow');
});
$('.dropdown-menu li').click(function () {
	$(this).find('.submenu').toggle();
});
$(window).resize(function () {
	if ($(window).width() < 769) {
		$('.search_form input').removeClass('onTop');
		$('.nav .dropdown-toggle').attr('data-toggle', 'none');
		$('.dropdown-toggle').click(function () {
			if ($(this).parent('#dropdown').hasClass('open')) {
				$(this).parent('#dropdown').removeClass('open');
			}
			else {
				$(this).parent('#dropdown').addClass('open');
			}
		});
	}
	else {
		$('.nav .dropdown-toggle').attr('data-toggle', 'dropdown');
	}
});