$(document).ready(function(){

var navOpen = false;


	$('nav').mouseenter(function(){
		
			$('nav').animate({marginTop: '0'}, 500);
			// $('.trigger').css({display: "none"});
			// $('.trigger2').css({display: "inline"});
		});

	$('nav').mouseleave(function(){
			$('nav').animate({marginTop: '-300'}, 500);
			// $('.trigger').css({display: "inline"});
			// $('.trigger2').css({display: "none"});
			
		});


})//END