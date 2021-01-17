var scrollWindow = function() {
	$(window).scroll(function(){
	  var $w = $(this),
		  st = $w.scrollTop(),
		  navbar = $('.ag_navbar'),
		  sd = $('.js-scroll-wrap');
  
	  if (st > 150) {
		if ( !navbar.hasClass('scrolled') ) {
		  navbar.addClass('scrolled');	
		}
	  } 
	  if (st < 150) {
		if ( navbar.hasClass('scrolled') ) {
		  navbar.removeClass('scrolled sleep');
		}
	  } 
	  if ( st > 350 ) {
		if ( !navbar.hasClass('awake') ) {
		  navbar.addClass('awake');	
		}
		
		if(sd.length > 0) {
		  sd.addClass('sleep');
		}
	  }
	  if ( st < 350 ) {
		if ( navbar.hasClass('awake') ) {
		  navbar.removeClass('awake');
		  navbar.addClass('sleep');
		}
		if(sd.length > 0) {
		  sd.removeClass('sleep');
		}
	  }
	});
  };
  scrollWindow();


$(document).ready(function() {
	var parallaxSliderOptions = {
	  speed: 1000,
	  autoplay: true,
	  parallax: true,
	  loop: true,
	  centeredSlides: true,
	  pagination: {
		el: '.swiper-pagination',
		clickable: true
	  },
	  on: {
		progress: function() {
		  let interleaveOffset = 0.5;
		  let swiper = this;
		  for (let i = 0; i < swiper.slides.length; i++) {
			let slideProgress = swiper.slides[i].progress,
			  innerOffset = swiper.width * interleaveOffset,
			  innerTranslate = slideProgress * innerOffset;
			swiper.slides[i].querySelector('.img-container').style.transform =
			  'translateX(' + innerTranslate + 'px)';
		  }
		},
		setTransition: function(speed) {
		  let swiper = this;
		  for (let i = 0; i < swiper.slides.length; i++) {
			swiper.slides[i].style.transition = speed + 'ms';
			swiper.slides[i].querySelector('.img-container').style.transition =
			  speed + 'ms';
		  }
		},
		resize: function() {
		  this.update();
		}
	  },
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	  }
	};
  
	var parallaxSlider = new Swiper('.parallaxSlider', parallaxSliderOptions);
	$(window).on('resize', function() {
	  parallaxSlider.update();
	});
  });

  
  $('.flexslider').flexslider({
    animation: "slide",
	animationLoop: true,
	controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
});


var Tabs = function() {
	$('.panel-ag').find('.panel-style').removeClass('active');
	$('.panel-ag').removeClass('active-panel');
	$('.panel-ag').find('.plus-box').html('<i class="fa fa-angle-down"></i>');
	$(this).parent().parent().addClass('active');
	$(this).parent().parent().parent().addClass('active-panel');
	$(this).parent().find('.plus-box').html('<i class="fa fa-angle-up"></i>');
  };

  $(window).on('load', function() {
    var galleryIsotope = $('.gallery-container').isotope({
      itemSelector: '.gallery-item',
      layoutMode: 'fitRows'
    });

    $('#gallery-filters li').on('click', function() {
      $("#gallery-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      galleryIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

  });

  $(document).ready(function() {
    $('.venobox').venobox({
		autoplay : false,
		spinner : 'circle', 
		spinColor : '#d2d2d2',
		infinigall: false, 
    });
  });

  $(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function(){
			$('.items').slick({
					dots: false,
					infinite: true,
					speed: 500,
					autoplay: true,
					autoplaySpeed: 3000,
					slidesToShow: 3,
					slidesToScroll: 1,
					responsive: [
				{
					breakpoint: 1024,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
				{
					breakpoint: 1000,
					settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
				{
					breakpoint: 750,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
			}
		},
				{
					breakpoint: 480,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
	
		]
	});
});
