$(document).ready(function(){

	// Initialize the Copy button next to my email address
	new ClipboardJS('#copyMyEmail'); 

	$('#copyMyEmail').on('click',function(){
		$(this).addClass('copied');
	});

	// Toggle sections when H2's are clicked.
	$('h2').on('click',function(){
		$(this).next('.info-list').slideToggle();
		$(this).toggleClass('active').toggleClass('inactive');
	});

});
