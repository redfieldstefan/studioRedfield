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

$('li.jewelry').mouseenter(function() {
	$('#featured img').attr('src', 'img/kahill-feature.jpg');
})

$('li.cutlery').mouseenter(function() {
	$('#featured img').attr('src', 'img/kotiach-feature.jpg');
})



//NAV


	$('nav ul .collections').mouseenter(function(){

			$('nav .options ul').css("display", "inline");

	});


	$('nav .options ul').mouseleave(function(){

			$('nav .options ul').css("display", "none");

	});



//CONTENT PAGES

$('.gallery li img').mouseenter(function(){
	var thisImg = this.src;
	console.log(thisImg);
	$('.gallery .gallery-head img').attr('src', thisImg);
})

$('.row.ceramicsRandy .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.ceramicsRandy .main-img img').attr('src', thisImg);
	})

$('.row.ceramicsLaura .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.ceramicsLaura .main-img img').attr('src', thisImg);
	})

$('.row.ceramicsSusanne .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.ceramicsSusanne .main-img img').attr('src', thisImg);
	})

// $('.row .text li img').mouseenter(function(){
// 	var thisImg = this.src;
// 	console.log(thisImg);
// 	$(this).parent.attr('src', thisImg)
// })


//Fine Art

$('.row.paintingRedfield .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.paintingRedfield .main-img img').attr('src', thisImg);
	})

$('.row.paintingBurck .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.paintingBurck .main-img img').attr('src', thisImg);
	})

$('.row.paintingMiller .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.paintingMiller .main-img img').attr('src', thisImg);
	})


//Tile

$('.row.kibaktile .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.kibaktile .main-img img').attr('src', thisImg);
	})

$('.row.tileCsicsko .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.tileCsicsko .main-img img').attr('src', thisImg);
	})

$('.row.tileDegandoerfer .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.tileDegandoerfer .main-img img').attr('src', thisImg);
	})


//CUTLERY

$('.row.chefsforge .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.chefsforge .main-img img').attr('src', thisImg);
	})



//TEXTILE

$('.row.wren .text li img').mouseenter(function(){
		var thisImg = this.src;
		$('.row.wren .main-img img').attr('src', thisImg);
	})


//TRANSISTION EFFECTS


	$('.medium-options a:nth-child(1)').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();

    $('html, body').animate({ scrollTop: 800 }, 800);


});

		$('.medium-options a:nth-child(2)').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();

    $('html, body').animate({ scrollTop: 1550 }, 1600);
});
//                                       |    |
//                                       |    --- duration (milliseconds) 
//                                       ---- distance from the top

		$('.medium-options a:nth-child(3)').click(function(event) {
    // Preventing default action of the event
    event.preventDefault();
    // Getting the height of the document
    var n = $(document).height();

    $('html, body').animate({ scrollTop: 2300 }, 1600);
});



$('.up img').mouseenter(function(){
	$('.up img').attr('src', "img/up-hover.png");	

})

$('.up img').mouseleave(function(){
	$('.up img').attr('src', "img/up.png")	
})

$('.up').click(function(event) {
	 event.preventDefault();
    var n = $(document).height();
    $('html, body').animate({ scrollTop: 0 }, 2000);

})

})//END