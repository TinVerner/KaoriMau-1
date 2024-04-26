
// Поиск по странице товара
const searchField = document.querySelector('.search-field');
const searchButton = document.querySelector('.search-button');
const headings = document.querySelectorAll('.menu-subtext'); 
const blocks = document.querySelectorAll('.block-pizzas', 'block-salads', 'block-deserts', 'block-drinks');

function handleSearch(event) {
  event.preventDefault();

  const searchTerm = searchField.value.toLowerCase().trim();

  if (searchTerm === '') {
    return;
  }

  const menuSections = document.querySelectorAll('.block-pizzas, .block-salads, .block-deserts, .block-drinks');

  menuSections.forEach(section => {
    const items = section.querySelectorAll('figure');

    items.forEach(item => {
      const itemName = item.querySelector('figcaption').textContent.toLowerCase();

      if (itemName.includes(searchTerm)) {
        item.style.display = 'block';
        for(let i = 0; i < headings.length; i++) {
          headings[i].style.display = 'none';
        }

        for (let i = 0; i < menuSections.length; i++) {
          menuSections[i].style.height = '0 px';
        }
      } else {
        item.style.display = 'none';
      }
    });
  });
}

searchButton.addEventListener('click', handleSearch);


// Модальное окно
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
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 500);
}