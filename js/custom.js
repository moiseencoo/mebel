
$(window).scroll(function(){
    
if ($(window).scrollTop() > 180 && $(window).width() > 768)
	{
		 $('.navbar').addClass('show');
	}
	else
	{
		$('.navbar').removeClass('show');
       
	}
});



$('.search_icon').click(function(){
    $('.search_form').toggle();
    $('.search_icon').toggle();
});

$('.m_menu').click(function(){
    $('.navbar').toggle('slow');
});