new Glider(document.querySelector('.cardsPaquetesTV__container'), {
    // Mobile-first defaults
    slidesToShow: 1.2,
    slidesToScroll: 1,
    scrollLock: true,
    // draggable: true,
    // dots: '.dots-VeTvInternet',
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
          },
          {
            // screens greater than >= 775px
            breakpoint: 1000,
            settings: {
                // exactWidth:true,
                slidesToShow: 2,
                slidesToScroll: 0,
                scrollLock: false,
                draggable: false,
            }
          },
    ]
  });

  new Glider(document.querySelector('.cardsPaquetesTV2__container'), {
    // Mobile-first defaults
    slidesToShow: 1.2,
    slidesToScroll: 1,
    scrollLock: true,
    // draggable: true,
    // dots: '.dots-VeTvInternet',
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
          },
          {
            // screens greater than >= 775px
            breakpoint: 1000,
            settings: {
                // exactWidth:true,
                slidesToShow: 2,
                slidesToScroll: 0,
                scrollLock: false,
                draggable: false,
            }
          },
    ]
  });
  
  
