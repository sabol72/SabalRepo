document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".nav-menu");
  const navBar = document.querySelector("nav");
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
  function transparentNav() {
    navBar.classList.add("scrolled");
  }
  // Event Listeners
  hamburger.addEventListener("click", toggleMenu);
  menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  });
});
