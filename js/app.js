document.addEventListener('DOMContentLoaded', function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)){
		slidesPerView = 1;
	}else{
		slidesPerView = 3;
	};

	const showSlider = new Swiper('.showcase-carousel', {
		// loop: true,
		slidesPerView: slidesPerView,
		speed: 1200,
		centeredSlides: true,
        mousewheel: true,
		// autoplay: true,
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev',
		},
    });

    //  document.querySelector('video').playbackRate = 2;

 });