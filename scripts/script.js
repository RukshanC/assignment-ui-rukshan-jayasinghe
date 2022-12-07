jQuery(document).ready(function(){

	// News Carousel
	$(".news-carousel").owlCarousel({
		loop:true,
		margin:20,
		dots:false,
		autoplay:true,
        autoplayHoverPause:true,
		autoplayTimeout:4000,
		nav:true,
        navText: ["◀","▶"],
		responsive:{
			0:{
				items:1,
				dots:false,
				nav:true
			},
			600:{
				items:2,
				dots:false,
				nav:true
			},
			1000:{
				items:4,
				dots:false,
				nav:true
			}
		}
	});

});