$(function(){

	$('.aMenu').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});


});

var link = $('.menu-link');
var link_activ = $('.menu-link_activ');
var menu = $('.menu');
var nav_link = $('.menu a')

link.click(function () {
    link.toggleClass('menu-link_activ');
    menu.toggleClass('menu_active');
});
nav_link.click(function () {
    link.removeClass('menu-link_activ');
    menu.toggleClass('menu_active');
});
