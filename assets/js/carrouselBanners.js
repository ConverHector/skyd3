var glide = new Glide('.banner__carousel', {
    type: 'slider',
    perView: 1,
    focusAt: 'center',
    dragThreshold:true,
    // startAt: 0, //adónde inicia el slider
    autoplay: 5000, //inicia automatic en miliseg
    // perTouch: false,
    breakpoints: {
      800: {
        perView: 1
      },
      480: {
        perView: 1
      }
    }
  })

  glide.mount()

// let glider = new Glider(document.querySelector('.banner__carousel'), {
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     scrollLock: true,
//     draggable: true,
//     // arrows: {
//     //     prev: '#prev-PaquetesTriples',
//     //     next: '#next-PaquetesTriples'
//     // },
    
//     responsive: [
//         {
//             breakpoint: 755,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//             }
//           },
//           {
//             breakpoint: 990,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 draggable: true,
//             }
//           },
//     ]
    
// });

// let gliderSentido = true


// setTimeout(() => {
//     glider.scrollItem(false)
// }, 500);

// setInterval(() => {
//     gliderSentido ? (glider.scrollItem(gliderSentido), gliderSentido = false) : (glider.scrollItem(gliderSentido), gliderSentido = true)
// }, 2000);