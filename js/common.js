$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$(".close-btn, .complete-button").click(function(){
		$(".ten, .modal-complete").fadeOut(250);
	});

	$(".mnu ul a[href*='#']").mPageScroll2id();

	$(".top-text h1").animated("fadeInDown", "fadeOutUp");
	
	$(".top-text p, .s-header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY", "flipOutY");

	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");

	$(".animation_3").animated("fadeInRight", "fadeOutRight");

	$("#works-grid").mixItUp();

	$(".s-works li").click(function(){
		$(".s-works li").removeClass("active");
		$(this).addClass("active");
	});

	$("#form").validate({
		submitHandler: function(form) {

			form.submit(function() {
				var th = $(this);
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: th.serialize()
				}).done(function() {
					$(".modal-complete, .ten").fadeIn(250);
					setTimeout(function() {
						th.trigger("reset");
					}, 1000);
				});
				return false;
			}); 

		},
		rules: {
			message: {
				required: false
			},
			email: {
				required: true,
				email: true
			},
			name: {
				required: true,
				minlength: 3
			},
			messages: {
				email: {
					required: 'Поле обязательно для заполнения'
				},
				name: {
					required: 'Имя должно быть обязательно заполнено',
					minlength: 'Длина имени должна быть не менее 3-х символов'
					// jQuery.format('Длина имени должна быть не менее {0}-х символов')
				}
			}
		}
	});

}); // end ready