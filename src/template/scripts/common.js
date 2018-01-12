$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');
	
	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var daysSpan = clock.querySelector('.days');
	  var hoursSpan = clock.querySelector('.hours');
	  var minutesSpan = clock.querySelector('.minutes');
	  var secondsSpan = clock.querySelector('.seconds');

	  function updateClock() {
	    var t = getTimeRemaining(endtime);

	    daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }

	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline = new Date(Date.parse('2020-1-20'));
	initializeClock('clockdiv', deadline);


	$('.catalog-p__item').each(function(index){
		index++;
		$(this).attr('id', 'door-' + index);
		sliders($(this));
	})

	$('.reviews__list').slick({
		prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right"></i></button>'
	})
	

	function sliders(el) {
		var sliderImgs = el.find('.catalog-p__slider'),
				sliderColors = el.find('.colors__list-wrap');

		sliderImgs.slick({
			slidesToShow: 2,
			prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="icon icon-arrow-left-gray"></i></button>',
			nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="icon icon-arrow-right-gray"></i></button>',
			asNavFor: sliderColors,
			responsive: [{
				breakpoint: 790,
				settings: {
					slidesToShow: 1
				}
			}]
		})
		sliderColors.slick({
			slidesToShow: 5,
			centerMode: true,
			focusOnSelect: true,
			asNavFor: sliderImgs
		})
	}
	


	var navBtn = $('.nav__button'),
			navWrap = $('.nav__wrap');

	navBtn.click(function() {
		navWrap.slideToggle();
	})







});
