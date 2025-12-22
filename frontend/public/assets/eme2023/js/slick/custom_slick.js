$('.category-slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1745,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 1399,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 692,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 482,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});
$('.category-slider-2').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1745,
            settings: {
                slidesToShow: 6,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 1540,
            settings: {
                slidesToShow: 5,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 910,
            settings: {
                slidesToShow: 4,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 730,
            settings: {
                slidesToShow: 3,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 2,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2500,
            }
        },
    ]
});
const productCategorySlider = (className) => {
    let $sliders = $(className);
    if($sliders.length){
        $sliders.each((ind,slider) => {            
            let $slider = $(slider);
            if(!$slider.find('.productReload').length) {
                $slider.removeClass('d-none');
                $slider.slick({
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
            }
        })
    }
}
productCategorySlider('.product-category-1');
$('.slider-3-blog').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [{
            breakpoint: 1550,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 940,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                fade: true,
            }
        },
    ]
});
$('.slider-4-2').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
            }
        },
        {
            breakpoint: 474,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
            }
        },
    ]
});
$('.slider-4-banner').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1410,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                fade: true,
            }
        },
    ]
});
$('.slider-voucher').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
            breakpoint: 1270,
            settings: {
                slidesToShow: 4,
                autoplay: true,
                autoplaySpeed: 3500,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});
$('.product-main-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.bottom-slider-image'
});
$('.bottom-slider-image').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-main-1',
    dots: false,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1400,
            settings: {
                vertical: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                vertical: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                vertical: false,
            }
        }, {
            breakpoint: 430,
            settings: {
                slidesToShow: 3,
                vertical: false,
            }
        },
    ]
});
$('.slider-6_1').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    responsive: [{
            breakpoint: 1430,
            settings: {
                slidesToShow: 5,
                autoplay: true,
                autoplaySpeed: 3500,
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});
$('.slider-7_1').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1660,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 1501,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1251,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 684,
            settings: {
                slidesToShow: 2,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
    ]
});
const productBoxSlider = (className) => {
    let $sliders = $(className);
    if($sliders.length){
        $sliders.each((ind,slider) => {            
            let $slider = $(slider);
            if(!$slider.find('.productReload').length) {
                $slider.removeClass('d-none');
                let numberSilde = $slider.find('>div').length;
                let slidesToShow = numberSilde <= 6 ? (numberSilde > 3 ? numberSilde : 4) : 6;
                $slider.slick({
                    infinite: true,
                    arrows: true,
                    slidesToShow: slidesToShow,
                    slidesToScroll: slidesToShow,
                    pauseOnHover: true,
                    responsive: [
                        {
                            breakpoint: 1700,
                            settings: {
                                slidesToShow: slidesToShow < 5 ? slidesToShow : 5,
                                slidesToScroll: slidesToShow < 5 ? slidesToShow : 5,
                            }
                        },
                        {
                            breakpoint: 1500,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 4,
                            }
                        }, {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            }
                        },
                        {
                            breakpoint: 920,
                            settings: {
                                slidesToShow: 2,
                                slidesToShow: 2,
                            }
                        },
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 1,
                                slidesToShow: 1,
                            }
                        },
                    ]
                });
            }
        })
    }
}
productBoxSlider('.product-box-slider');
$('.banner-slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    responsive: [{
            breakpoint: 1387,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 966,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 34,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                fade: true,
            }
        },
    ]
}); 
$('.slider-bank-3').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    responsive: [{
        breakpoint: 1652,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 914,
        settings: {
            slidesToShow: 1,
        }
    },
    ]
});
$('.slider-promotion-3').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: true,
    responsive: [{
        breakpoint: 1652,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 914,
        settings: {
            slidesToShow: 1,
        }
    },
    ]
});