document.addEventListener("DOMContentLoaded", function () {
  if (!window.Swiper) {
    console.error("Swiper is not loaded!");
    return;
  }

  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false, // Keep autoplay even after user interaction
    // },
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // Allow users to navigate using dots
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
  });

  console.log("Swiper initialized:", swiper);
});

const modal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.getElementById("close-modal");
const images = document.querySelectorAll(".carousel-image");

images.forEach((image) => {
  image.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImage.src = this.src;
  });
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
