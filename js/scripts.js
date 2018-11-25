$(document).ready(function(){

	$('h2').on('click',function(){
		if ($(window).width() < 800) {
			$(this).next('.info-list').slideToggle();
			$(this).toggleClass('active').toggleClass('inactive');
		}
	});

});
