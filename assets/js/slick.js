// Slick Slider https://kenwheeler.github.io/slick/

var portfolio = $('#portfolio');

portfolio.slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{

        breakpoint: 768,
        settings: {
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1
        }

      }]
});

$('#portfolio-arrow-prev').on('click', (event) => {
    event.preventDefault();
    
    portfolio.slick('slickPrev');
});

$('#portfolio-arrow-next').on('click', (event) => {
    event.preventDefault();
    
    portfolio.slick('slickNext');
});