var swiper = new Swiper(".mySwiper", {

    breakpoints: {
        1025: {
            slidesPerView: 3,
        },
    },
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});