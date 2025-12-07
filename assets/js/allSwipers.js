// Initialize Swiper sliders
const swiperConfig = {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 25
        }
    }
};

// Characters Swiper - 4 slides di desktop
const charactersSwiper = new Swiper('.characters-swiper', {
    ...swiperConfig,
    autoplay: {
        delay: 2500,
    },
});

// Program Swiper
const programSwiper = new Swiper('.program-swiper', {
    ...swiperConfig,
    autoplay: {
        delay: 4000,
    },
});

// Pause autoplay on hover untuk semua swiper
const allSwipers = [charactersSwiper, programSwiper];
allSwipers.forEach(swiper => {
    if (swiper && swiper.el) {
        swiper.el.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
        });
        swiper.el.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
        });
    }
});