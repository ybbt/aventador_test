$(function () {
	// "use strict";

	$("._clickToPopup").click(function () {
		console.log('ok');
		$("#showSlider").fadeIn();
		// $(".slider").addClass("slider__visible");
		// $(".img-show img").attr("src", $src);
		$("body").css("overflow", "hidden");
		slick.slick('refresh');
	});
	
	$("#overlaySlider").click(function (e) {
		//console.log(e.target.attr('class'));
		if($(e.target).closest('.show_main').length) {
	  		return;
		}
		$("#showSlider").fadeOut();
		// $(".slider").removeClass("slider__visible");
		$("body").css("overflow", "auto");
	});


	$("#clickToPopupVideo").click(function () {
		// console.log('ok');
		$("#showVideo").fadeIn();
		// $(".slider").addClass("slider__visible");
		// $(".img-show img").attr("src", $src);
		$("body").css("overflow", "hidden");
		slick.slick('refresh');
	});
	
	$("#overlayVideo").click(function (e) {
		//console.log(e.target.attr('class'));
		if($(e.target).closest('.show_main').length) {
	  		return;
		}
		$("#showVideo").fadeOut();
		// $(".slider").removeClass("slider__visible");
		$("body").css("overflow", "auto");
	});


	var slick = $('._sliderFor').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '._sliderNav',
		dots: true,
		// nextArrow: '._nextArrow',
		// prevArrow: '._prevArrow',
	});
	$('._sliderNav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '._sliderFor',
		dots: false,
		
		focusOnSelect: true,
		// arrows: false,
		nextArrow: '._nextArrow',
		prevArrow: '._prevArrow',
	});

});

