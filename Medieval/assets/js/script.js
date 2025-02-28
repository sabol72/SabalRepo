document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  const menu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger-menu");
  const menuLinks = document.querySelectorAll(".nav-links-item");

  // Toggle Menu
  function toggleMenu() {
    menu.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
    hamburger.classList.toggle("active");
  }

  // Close menu on link click (for mobile)
  function closeMenu() {
    menu.classList.remove("show");
    document.body.classList.remove("no-scroll");
    hamburger.classList.remove("active");
  }

  // Event Listeners
  hamburger.addEventListener("click", toggleMenu);
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
});
