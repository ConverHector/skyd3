const cardsPaquetes = new Glider(document.querySelector('.cardsPaquetesTV__container'), {
  // Mobile-first defaults
  slidesToShow: 1.2,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  // arrows: {
  //     prev: '#prev-skyPaquetes',
  //     next: '#next-skyPaquetes'
  // },
  responsive: [
      {

          // screens greater than >= 775px
          breakpoint: 700,
          settings: {
              slidesToShow: 2.2,
              slidesToScroll: 1,
          }
      },

      {
          // screens greater than >= 775px
          breakpoint: 800,
          settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              // scrollLock: false,
              // draggable: false,
          }
      },


      {
          // screens greater than >= 775px
          breakpoint: 1200,
          settings: {
              slidesToShow: 3.2,
              slidesToScroll: 1,
              // scrollLock: false,
              draggable: true,
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
