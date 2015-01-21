$(document).ready(function(){

// var navOpen = false;


// 	$('nav').mouseenter(function(){
		
// 			$('nav').animate({marginTop: '0'}, 500);
// 			// $('.trigger').css({display: "none"});
// 			// $('.trigger2').css({display: "inline"});
// 		});

// 	$('nav').mouseleave(function(){
// 			$('nav').animate({marginTop: '-300'}, 500);
// 			// $('.trigger').css({display: "inline"});
// 			// $('.trigger2').css({display: "none"});
			
// 		});


$('li.tile').mouseenter(function() {
	$('#featured img').attr('src', 'img/kibaktile-feature.jpg');
})

$('li.ceramics').mouseenter(function() {
	$('#featured img').attr('src', 'img/ceramic-feature.jpg');
})

$('li.paintings').mouseenter(function() {
	$('#featured img').attr('src', 'img/miller-feature.jpg');
})

$('li.bags').mouseenter(function() {
	$('#featured img').attr('src', 'img/wren-feature.jpg');
})

$('li.jewlery').mouseenter(function() {
	$('#featured img').attr('src', 'img/kahill-feature.jpg');
})

$('li.cutlery').mouseenter(function() {
	$('#featured img').attr('src', 'img/kotiach-feature.jpg');
})

})//END