document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 1.15,
        centeredSlides: true, 
        spaceBetween: 16, 
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 32, 
                loop: false,
                centeredSlides: false, 
            }
        }
    });
});
