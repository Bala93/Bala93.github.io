(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

})(jQuery);

// var bar = new ProgressBar.Circle(progress1, {
// 	color: '#aaa',
// 	// This has to be the same size as the maximum width to
// 	// prevent clipping
// 	strokeWidth: 4,
// 	trailWidth: 1,
// 	easing: 'easeInOut',
// 	duration: 1400,
// 	text: {
// 	  autoStyleContainer: false
// 	},
// 	from: { color: '#aaa', width: 1 },
// 	to: { color: '#333', width: 4 },
// 	// Set default step function for all animate calls
// 	step: function(state, circle) {
// 	  circle.path.setAttribute('stroke', state.color);
// 	  circle.path.setAttribute('stroke-width', state.width);
  
// 	  var value = Math.round(circle.value() * 100);
// 	  if (value === 0) {
// 		circle.setText('');
// 	  } else {
// 		circle.setText(value);
// 	  }
  
// 	}
//   });
//   bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
//   bar.text.style.fontSize = '2rem';
  
//   bar.animate(0.75);  // Number from 0.0 to 1.0
