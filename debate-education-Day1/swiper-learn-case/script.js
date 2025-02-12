document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.hero_swiper', {
      speed: 400,
      spaceBetween: 50,
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 3000, // 3s per slide
          disableOnInteraction: false,
      },
      on: {
          slideChangeTransitionStart: function () {
              updateSlideProgress(swiper);
          }
      }
  });

  function updateSlideProgress(swiperInstance) {
      const slides = document.querySelectorAll('.swiper-slide .slide-progress');
      
      // Reset all progress bars
      slides.forEach(progress => {
          progress.style.width = '0%';
          progress.style.transition = 'none';
      });

      // Get the active slide's progress bar
      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
      const progressBar = activeSlide.querySelector('.slide-progress');

      if (progressBar) {
          progressBar.style.transition = 'width 3s linear';
          progressBar.style.width = '100%';
      }
  }

  // Initialize progress on first slide
  updateSlideProgress(swiper);
});
