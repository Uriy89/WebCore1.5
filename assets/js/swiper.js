
var shouldEnableSwiper = window.innerWidth <= 321;

if (shouldEnableSwiper) {
    var swiper = new Swiper('.brands-slider', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        }
    });
}

