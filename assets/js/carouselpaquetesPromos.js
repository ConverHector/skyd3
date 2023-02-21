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
                slidesToShow: 2.2,
                slidesToScroll: 1,
            }
          },
          {
            // screens greater than >= 775px
            breakpoint: 1000,
            settings: {
                // exactWidth:true,
                slidesToShow: 3,
                slidesToScroll: 0,
                scrollLock: false,
                draggable: false,
            }
          },
    ]
  });


  new Glider(document.querySelector('#ligasSky'), {
    // Mobile-first defaults
    slidesToShow: 1.2,
    slidesToScroll: 1,
    // scrollLock: true,
    draggable: true,
    // arrows: {
    //     prev: '#prev-ligasSky',
    //     next: '#next-ligasSky'
    // },
    responsive: [
        {
  
            // screens greater than >= 775px
            breakpoint: 700,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
            },
            draggable: true,
        },
  
        {
            // screens greater than >= 775px
            breakpoint: 800,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
                // scrollLock: false,
                // draggable: false,
            }
        },
  
  
        {
            // screens greater than >= 775px
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 0,
                // scrollLock: false,
                draggable: false,
            }
        },
    ]
  });
  