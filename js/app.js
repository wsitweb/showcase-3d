document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.showcase-carousel', {
		// loop: true,
		slidesPerView: 3,
		speed: 1200,
		centeredSlides: true,
        mousewheel: true,
		autoplay: true,
		navigation: {
			nextEl: '.showcase-navigation__next',
			prevEl: '.showcase-navigation__prev',
		},
    });

     document.querySelector('video').playbackRate = 2;

 });