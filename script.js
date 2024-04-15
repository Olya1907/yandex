var swiper = new Swiper(".mySwiper", {

    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
    },
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 4000,
      },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".stages-mob__mySwiper", {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
        // type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});