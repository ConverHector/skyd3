  new Glider(document.querySelector('.skyHDInternet__container-cards'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    // dots: '.dots-skyHDInternet',
    arrows: {
        prev: '#prev-skyHDInternet',
        next: '#next-skyHDInternet'
    },
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                draggable: true,
            }
          },
          {
            // screens greater than >= 775px
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 0,
                scrollLock: false,
                draggable: false,
            }
          },
    ]
  });