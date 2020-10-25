$(function () {
//================== menu-burger===========================
	$('.menu-burger__icon').click(function(event) {
	$('.header__menu, .menu-burger__icon').toggleClass('active');
	$('body').toggleClass('lock');
	$('.wrapper').toggleClass('displacement');
	});

	$('.header__menu-item').click(function(event) {
		$('.header__menu, .menu-burger__icon').removeClass('active');
		$('body').removeClass('lock');
		$('.wrapper').removeClass('displacement');
	});

//==========================================================
//=================smooth scroll=============================
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function(e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = 0;
		// const topOffset = document.querySelector('.scrollto').offsetHeight;
		// const topOffset = 0; // если не нужен отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});
//==========================================================
//==========================================================
 
	var mySwiper = new Swiper ('.slider-wrapper', {
		containerModifierClass: 'slider-wrapper', 
		wrapperClass: 'slider-container',
		slideClass: 'slider-slide',
		loop: true,
		draggable: false,
		autoplay: false,
		slidesToShow: 1,
		pagination: {
			el: '.clients__pagination',
			clickable: true,
		},
		// breakpoints: {
		// 	'1400px': {
		// 		slidesPerView: 1,
		// 		spaceBetween: 10,
		// 	},
		// }
	})

	var mySwiper = new Swiper ('.clients__reviews-wrapper', {
		containerModifierClass: 'clients__reviews-wrapper', 
		wrapperClass: 'clients__reviews-container',
		slideClass: 'clients__review',
		loop: true,
		spaceBetween: 30,
		autoplay: true,
		centeredSlides: true,
		autoplay: {
			delay: 6000,
		},
		slidesToShow: 1,
	})

///////////////start-nicescroll//////////////////////
	$(".text, .choose__item-text, .sevices__card-text").niceScroll({
		cursorcolor:"#fc9e20",
		cursorwidth:"4px",
		background:"none",
		cursorborder:"none",
		cursorborderradius:4
	});
///////////////end-nicescroll//////////////////////

});
