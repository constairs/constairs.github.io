$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".mnu ul a[href*='#']").mPageScroll2id();

	$(".top-text h1").animated("fadeInDown", "fadeOutUp");
	
	$(".top-text p, .s-header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");

	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");

	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$(".s-works li").click(function(){
		$(".s-works li").removeClass("active");
		$(this).addClass("active");
	});

}); // end ready