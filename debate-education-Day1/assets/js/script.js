var homeSlider = new Swiper(".home-slider", {
    loop: true,
    spaceBetween: 20, 
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    autoplay: {
       delay: 5000, // Adjust the delay in milliseconds (e.g., 5000 for 5 seconds)
       disableOnInteraction: false, // Allow autoplay to continue after manual navigation
    },
    navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
    },
 });