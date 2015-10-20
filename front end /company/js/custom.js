jQuery(document).ready(function ($) {

	"use strict";

	$(window).load(function() { 
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});
	jQuery.browser={};(function(){jQuery.browser.msie=false;
	jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
	jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();

	// Superfish
	if ($(".sf-menu")[0]) {
		$('.sf-menu').superfish({
			delay: 100,
			autoArrows: false,
			animation: {
				opacity: 'none', height: 'show'
			},
			speed: 300
		});
		// $('.sf-menu li li a').prepend('<i class="fa-caret-right"></i>');
		$('.sf-menu li li .sf-sub-indicator i').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	}

	// Parallax
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 0
	});
	var fader = $('.big_slider');
	$(window).on('scroll', function() {
		var st = $(this).scrollTop();
		fader.css({ 'opacity' : (1 - st/600) });
	});

	// Progress Load
	if ($(".progress-bar > span")[0]) {
		$('.progress-bar > span').waypoint(function() {
			$(this).each(function() {
				$(this).animate({
					width: $(this).attr('rel') + "%"
				}, 1600);
			});
		}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
		});
	}

	// Tabs
	var tabs = jQuery('ul.tabs');
	tabs.each(function (i) {
		// get tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function (e) {
			// get tab's location
			var contentLocation = jQuery(this).attr('href');
			// Let go if not a hashed one
			if (contentLocation.charAt(0) === "#") {
				e.preventDefault();
				// add class active
				tab.removeClass('active');
				jQuery(this).addClass('active');
				// show tab content & add active class
				jQuery(contentLocation).fadeIn(500).addClass('active').siblings().hide().removeClass('active');
			}
		});
	});

	// Accordion
	jQuery("ul.tt-accordion li").each(function () {
		if (jQuery(this).index() > 0) {
			jQuery(this).children(".accordion-content").css('display', 'none');
		} else {
			if ($(".faq")[0]) {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='fa-minus'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='fa-plus'></i>");
			} else {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='fa-minus'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='fa-plus'></i>");
			}
		}
		jQuery(this).children(".accordion-head").bind("click", function () {
			jQuery(this).parent().addClass(function () {
				if (jQuery(this).hasClass("active")) {
					return;
				} {
					return "active";
				}
			});
			if ($(".faq")[0]) {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("fa-minus").removeClass("fa-plus");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("fa-minus").addClass("fa-plus");
			} else {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("fa-minus").removeClass("fa-plus");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("fa-minus").addClass("fa-plus");
			}
		});
	});

	// Toggle
	jQuery("ul.tt-toggle li").each(function () {
		jQuery(this).children(".toggle-content").css('display', 'block');
		jQuery(this).find(".toggle-head-sign").html("<i class='fa-minus'></i>");
		jQuery(this).children(".toggle-head").bind("click", function () {
			if (jQuery(this).parent().hasClass("active")) {
				jQuery(this).parent().removeClass("active");
			} else {
				jQuery(this).parent().addClass("active");
			}
			jQuery(this).find(".toggle-head-sign").html(function () {
				if (jQuery(this).parent().parent().hasClass("active")) {
					return "<i class='fa-minus'></i>";
				} else {
					return "<i class='fa-plus'></i>";
				}
			});
			jQuery(this).siblings(".toggle-content").slideToggle();
		});
	});
	jQuery("ul.tt-toggle").find(".toggle-content.active").siblings(".toggle-head").trigger('click');

	// Responsive
	$("#header nav").before('<div id="mobilepro"><i class="fa-reorder fa-times"></i></div>');
	$("#header .sf-menu a.sf-with-ul").before('<div class="subarrow"><i class="fa-angle-down"></i></div>');
	$('.subarrow').click(function () {$(this).parent().toggleClass("xpopdrop");});
	$('#mobilepro').click(function () {
		$('#header .sf-menu').slideToggle('slow', 'easeInOutExpo').toggleClass("xactive");
		$("#mobilepro i").toggleClass("fa-reorder");
	});
	$("body").click(function() {
		$('#header .xactive').slideUp('slow', 'easeInOutExpo').removeClass("xactive");
		$("#mobilepro i").addClass("fa-reorder");
	});
	$('#mobilepro').click(function(e) {e.stopPropagation();});
	function checkWindowSize() {
		if ($(window).width() >= 959) {
			$('#header .sf-menu').css('display', 'block').removeClass("xactive");
		} else {
			$('#header .sf-menu').css('display', 'none');
		}
	}
	$(window).load(checkWindowSize);
	$(window).resize(checkWindowSize);

	// ToTop
	$('#toTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	// Search
	$(".search_icon").click(function() {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$('.search_icon i').removeClass('activeated_search');
			$('.s_form').fadeOut('slow').removeClass('animated slideDown');
		} else {
			$(this).addClass('opened');
			$('.search_icon i').addClass('activeated_search');
			$(".s_form").fadeIn('slow').addClass('animated slideDown');
			$('.search_icon #inputhead').focus();
		}
	});
	$("body").click(function() {
		$('.search_icon').removeClass('opened');
		$('.search_icon i').removeClass('activeated_search');
		$('.s_form').fadeOut('slow').removeClass('animated slideDown');
	});
	$('.search').click(function(e) {
		e.stopPropagation();
	});

	// Notification
	$(".notification-close").click(function () {
		$(this).parent().slideUp("slow");
		return false;
	});

	// Gallery
	if ($("#my_gallery")[0]) {
		$('#my_gallery').mixitup({resizeContainer: false});
	}
	if ($("a[data-gal^='lightbox']")[0]) {
		$("a[data-gal^='lightbox']").prettyPhoto({
			animation_speed: 'normal',
			theme: 'dark_rounded',
			autoplay_slideshow: false,
			overlay_gallery: true,
			show_title: false
		});
	}

	// Slider
	if ($("[class^='slider_']")[0]) {
		$("[class^='slider_']").owlCarousel({
			slideSpeed : 500,
			paginationSpeed : 500,
			autoPlay: true,
			autoHeight: true,
			stopOnHover: true,
			addClassActive: true,
			transitionStyle : "goDown",
			singleItem:true,
			navigation : false,
			navigationText : ["<i class='fa-chevron-left'></i>","<i class='fa-chevron-right'></i>"],
			rewindNav : true,
			scrollPerPage : false,
			pagination : true,
			paginationNumbers: false
		});
	}
	if ($(".testimonials_slides")[0]) {
		$(".testimonials_slides").owlCarousel({
			slideSpeed : 500,
			paginationSpeed : 500,
			autoPlay: true,
			autoHeight: true,
			stopOnHover: true,
			transitionStyle : "backSlide",
			singleItem:true,
			navigation : true,
			navigationText : ["<i class='fa-chevron-left'></i>","<i class='fa-chevron-right'></i>"],
			rewindNav : true,
			scrollPerPage : true,
			pagination : false
		});
	}

	// CountTo
	if ($(".timer")[0]) {
		$('.timer').waypoint(function() {
			$('.timer').data('countToOptions', {
				formatter: function (value, options) {
					return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
				}
			});
			$('.timer').each(count);
			function count(options) {
				var $this = $(this);
				options = $.extend({}, options || {}, $this.data('countToOptions') || {});
				$this.countTo(options);
			}
		}, {
			triggerOnce: true,
			offset: 'bottom-in-view'
		});
	}

	// Ajax Contact
	if ($("#contactForm")[0]) {
		$('#contactForm').submit(function () {
			$('#contactForm .error').remove();
			$('#contactForm .requiredField').removeClass('fielderror');
			$('#contactForm .requiredField').addClass('fieldtrue');
			$('#contactForm span strong').remove();
			var hasError = false;
			$('#contactForm .requiredField').each(function () {
				if (jQuery.trim($(this).val()) === '') {
					var labelText = $(this).prev('label').text();
					$(this).addClass('fielderror');
					$('#contactForm span').html('<strong>*Please fill out all fields.</strong>');
					hasError = true;
				} else if ($(this).hasClass('email')) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if (!emailReg.test(jQuery.trim($(this).val()))) {
						var labelText = $(this).prev('label').text();
						$(this).addClass('fielderror');
						$('#contactForm span').html('<strong>Is incorrect your email address</strong>');
						hasError = true;
					}
				}
			});
			if (!hasError) {
				$('#contactForm').slideDown('normal', function () {
					$("#contactForm #sendMessage").addClass('load-color');
					$("#contactForm #sendMessage").attr("disabled", "disabled").addClass("btn-success").val('Sending message. Please wait...');
				});
				var formInput = $(this).serialize();
				$.post($(this).attr('action'), formInput, function (data) {
					$('#contactForm').slideUp("normal", function () {
						$(this).before('<div class="notification-box notification-box-success"><p><i class="fa-check"></i>Thanks!</strong> Your email was successfully sent. We check Our email all the time.</p></div>');
					});
				});
			}
			return false;
		});
	}

	// Tipsy
		$('.toptip').tipsy({fade: true,gravity: 's'});
		$('.bottomtip').tipsy({fade: true,gravity: 'n'});
		$('.righttip').tipsy({fade: true,gravity: 'w'});
		$('.lefttip').tipsy({fade: true,gravity: 'e'});

	// Sticky
	if ($(".sticky_true")[0]){
		$('.sticky_true').before('<div class="Corpse_Sticky"></div>');
		$(window).scroll(function(){
			var wind_scr = $(window).scrollTop();
			var window_width = $(window).width();
			var head_w = $('.sticky_true').height();
			if (window_width >= 10) {
				if(wind_scr < 400){
					if($('.sticky_true').data('sticky') === true){
						$('.sticky_true').data('sticky', false);
						$('.sticky_true').stop(true).animate({opacity : 0}, 300, function(){
							$('.sticky_true').removeClass('sticky slideDown');
							$('.sticky_true').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', '');
						});
					}
				} else {
					if($('.sticky_true').data('sticky') === false || typeof $('.sticky_true').data('sticky') === 'undefined'){
						$('.sticky_true').data('sticky', true);
						$('.sticky_true').stop(true).animate({opacity : 0},300,function(){
							$('.sticky_true').addClass('sticky slideDown');
							$('.sticky_true.sticky').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', head_w + 'px');
						});
					}
				}
			}
		});
	}

	// Example Load Items
	$('.load_more_posts').append('<img style="display: none;margin: 0 auto" src="images/loading2.gif"><h4 style="display: none">Sorry! Not more items.</h4>');
	$( ".load_more_posts a" ).removeAttr('href').click(function() {
		jQuery('.load_more_posts a').fadeOut( 200 );
		jQuery('.load_more_posts img').delay( 200 ).fadeIn( 1000 );
		jQuery('.load_more_posts img').delay( 3000 ).fadeOut( 1000 );
		jQuery('.load_more_posts h4').delay( 5200 ).fadeIn( 1000 );
	});
	$('.load_more_portfolio').append('<img style="display: none;margin: 0 auto" src="images/loading2.gif"><h4 style="display: none">Sorry! Not more items.</h4>');
	$( ".load_more_portfolio a" ).removeAttr('href').click(function() {
		jQuery('.load_more_portfolio a').fadeOut( 200 );
		jQuery('.load_more_portfolio img').delay( 200 ).fadeIn( 1000 );
		jQuery('.load_more_portfolio img').delay( 3000 ).fadeOut( 1000 );
		jQuery('.load_more_portfolio h4').delay( 5200 ).fadeIn( 1000 );
	});

	// OneNav
	if ($(".OneNav")[0]){
		$('body').plusAnchor({
			easing: 'easeInOutExpo',
			speed:  1600
		});
		$('.OneNav li a').click(function(){
			$('.OneNav li').delay( 1000 ).removeClass('current');
			$(this).parent('li').delay( 2000 ).addClass('current');
			$('#header .xactive').slideUp('slow', 'easeInOutExpo').removeClass("xactive");
			$("#mobilepro i").addClass("fa-reorder");
		});

		// Bind to scroll
		$(window).scroll(function(){
			var lastId,
				topMenu = $(".OneNav"),
				topMenuHeight = topMenu.outerHeight()+15,
				menuItems = topMenu.find("a"),
				scrollItems = menuItems.map(function(){
					var item = $($(this).attr("href"));
				if (item.length) { return item; }
			});
			var fromTop = $(this).scrollTop()+topMenuHeight;
			var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
				return this;
			});
			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";
		   
			if (lastId !== id) {
				lastId = id;
				// Set/remove active class
				menuItems
				.parent().removeClass("current")
				.end().filter("[href=#"+id+"]").parent().addClass("current");
			}                   
		});
	}

	// GoogleMap
	if ($("#mymap")[0]) {
		var map;
		map = new GMaps({
			div: '#mymap',
			lat: -12.042,
			lng: -77.038
		});
		map.addMarker({
			lat: -12.042,
			lng: -77.028,
			title: 'Valeo Parallax',
			infoWindow: {
				content: '<p>Valeo Parallax One Page Template</p>'
			}
		});
	}
});