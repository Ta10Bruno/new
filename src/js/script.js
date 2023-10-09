    const slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    mouseDrag:true,
    autoplayButtonOutput:false,
    controls:false,
    nav:false,
  });

  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
  
    autoplay: {
      delay: 3500,
    }
  });

  const time = new Swiper('.time', {

    direction: 'vertical',
    loop: true,

    autoplay: {
      delay: 3000,
    }
  });

  const time2 = new Swiper('.time2', {

    direction: 'vertical',
    loop: true,

    autoplay: {
      delay: 200,
    }
  });



