function openModal(image, title, price, description) {
  let modal = document.getElementById("modal");



  let modalImage = document.getElementById("modal-image");
  let modalTitle = document.getElementById("modal-title");
  let modalPrice = document.getElementById("modal-price");
  let modalDescription = document.getElementById("modal-description");

  modalImage.src = image;
  modalTitle.innerText = title;
  modalPrice.innerText = price;
  modalDescription.innerText = description;

  modal.style.display = "block";
  modal.classList.add("fade-in");
}

function closeModal() {

  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");

  setTimeout(function() {
    modal.style.display = "none"; // Скрываем модальное окно после завершения плавного закрытия
    modal.classList.remove("fade-out"); // Удаляем класс плавного закрытия
  }, 500);
}