$('.slickslide').slick({
    dots: true,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 5,
    responsive: [
      {
        dots: true,
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        dots: true,
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
      
      
      
      