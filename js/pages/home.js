 $(document).ready(function () {
	$('.fullwidthbanner').revolution({
		delay: 9000,
		//startwidth: 800,
		//startheight: 500,
		startWithSlide: 0,

		fullScreenAlignForce: "off",
		autoHeight: "off",
		minHeight: "off",

		shuffle: "off",

		onHoverStop: "on",

		thumbWidth: 100,
		thumbHeight: 50,
		thumbAmount: 3,

		hideThumbsOnMobile: "off",
		hideNavDelayOnMobile: 1500,
		hideBulletsOnMobile: "off",
		hideArrowsOnMobile: "off",
		hideThumbsUnderResoluition: 0,

		hideThumbs: 0,
		hideTimerBar: "off",

		keyboardNavigation: "on",

		navigationType: "bullet",
		navigationArrows: "nexttobullets",
		navigationStyle: "round",

		navigationHAlign: "center",
		navigationVAlign: "bottom",
		navigationHOffset: 30,
		navigationVOffset: 30,

		soloArrowLeftHalign: "left",
		soloArrowLeftValign: "center",
		soloArrowLeftHOffset: 20,
		soloArrowLeftVOffset: 0,

		soloArrowRightHalign: "right",
		soloArrowRightValign: "center",
		soloArrowRightHOffset: 20,
		soloArrowRightVOffset: 0,


		touchenabled: "on",
		swipe_velocity: "0.7",
		swipe_max_touches: "1",
		swipe_min_touches: "1",
		drag_block_vertical: "false",

		parallax: "mouse",
		parallaxBgFreeze: "on",
		parallaxLevels: [10, 7, 4, 3, 2, 5, 4, 3, 2, 1],
		parallaxDisableOnMobile: "off",

		stopAtSlide: -1,
		stopAfterLoops: -1,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		hideSliderAtLimit: 0,

		dottedOverlay: "none",

		spinned: "spinner5",

		fullWidth: "off",
		forceFullWidth: "off",
		fullScreen: "off",
		fullScreenOffsetContainer: "#topheader-to-offset",
		fullScreenOffset: "0px",

		panZoomDisableOnMobile: "off",

		simplifyAll: "off",

		shadow: 3
	});

});