document.addEventListener("DOMContentLoaded", function () {
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
