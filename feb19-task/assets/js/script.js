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
