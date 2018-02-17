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

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	/*$("form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".modal-complete, .ten").fadeIn(250);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	}); */

	// $("form").submit(function(){
	// 	var dat, fm, valid_name, valid_email;
	// 	fm = $(this);
	// 	dat = fm.serialize();
	// 	valid_name = fm.find('.validname');
	// 	valid_email = fm.find('.validemail');
	// 	valid_message = fm.find('.validmessage');
	// 	valid_name.css("border-color","#ccc");
	// 	valid_email.css("border-color","#ccc");
	// 	valid_message.css("border-color","#ccc");

	// 	valid_name.blur(function() {
	// 		if(valid_name.val().length>1) {
	// 			$(this).css("border-color","rgba(86,155,68,.8)");
	// 		} else {
	// 			$(this).css("border-color","rgba(243,44,45,.8)");
	// 		}
	// 	});

	// 	valid_email.blur(function() {
	// 		if($(this).val() != '') {
	// 			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	// 			if(pattern.test($(this).val())){
	// 				$(this).css("border-color","rgba(86,155,68,.8)");
	// 				valid = 1;
	// 			} else {
	// 				$(this).css("border-color","rgba(243,44,45,.8)");
	// 			}
	// 		} else {
	// 			$(this).css("border-color","rgba(243,44,45,.8)");
	// 		}
	// 	});

	// 	if(valid_name.val().length>1 && valid_email.val().length>3){
	// 		$.post("mail.php", {dat:dat},function(data) {
	// 			$(".modal-complete, .ten").fadeIn(250);
	// 			setTimeout(function() {
	// 				fm.trigger("reset");
	// 			}, 1000);
	// 		});
	// 		return false;
	// 	}else{
	// 		if(valid_name.val().length<1){
	// 			valid_name.css("border-color","rgba(243,44,45,.8)");
	// 		}            
	// 		if(valid_email.val().length<3){
	// 			valid_email.css("border-color","rgba(243,44,45,.8)");
	// 		}
	// 		return false; 
	// 	}
	// }); // end validate


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

});// end ready

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
