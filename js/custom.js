$(window).scroll(function () {
	if ($(window).scrollTop() > 180 && $(window).width() > 768) {
		$('.navbar').addClass('navbar-fixed-top');
		$('#navbar').removeClass('normal-menu');
		$('#navbar').addClass('fixed-menu');
		$('.navbar-header').show();
	}
	else {
		$('.navbar').removeClass('navbar-fixed-top');
		$('#navbar').removeClass('fixed-menu');
		$('#navbar').addClass('normal-menu');
		$('.navbar-header').hide();
	}
});
$('.search_icon').click(function () {
	$('.search_form').toggle();
	$('.search_icon').toggle();
});
$('.m_menu').click(function () {
	$('.navbar').toggle('slow');
});
/*$('.dropdown').click(function () {
	if ($(this).hasClass('open')) {
		$(this).find('.dropdown-menu').hide();
	}
	else {
		$(this).find('.dropdown-menu').show();
	}
});
$('.dropdown-menu li').click(function () {
	$(this).find('.submenu').toggle();
});*/