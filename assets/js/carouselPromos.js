const glider = new Glider(document.querySelector(".promos__container"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    dots:'#dots2',
  });

  //  = new Glider(document.getElementById('glider'));

  function sliderAuto(slider, miliseconds) {
    slider.isLastSlide = function() {
      return slider.page >= slider.dots.childElementCount - 1;
    }
   
    var slide = function() {
      slider.slideTimeout = setTimeout(function() {
        function slideTo() {
          return slider.isLastSlide() ? 0 : slider.page + 1;
        }
   
        slider.scrollItem(slideTo(), true);
      }, miliseconds);
    }
   
    slider.ele.addEventListener('glider-animated', function(event) {
      window.clearInterval(slider.slideTimeout);
      slide();
    });
   
    slide();
   }
   
   sliderAuto(glider, 2500)