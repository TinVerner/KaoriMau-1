
// Поиск по странице товара

// Получаем ссылки на элементы страницы
const searchField = document.querySelector('.search-field');
const searchButton = document.querySelector('.search-button');

// Функция для обработки события нажатия на кнопку "Найти"
function handleSearch(event) {
  event.preventDefault(); // Предотвращаем отправку формы (если используется форма)

  const searchTerm = searchField.value.toLowerCase().trim(); // Получаем введенный текст, приводим к нижнему регистру и удаляем пробелы

  if (searchTerm === '') {
    return; // Если пользователь не ввел ничего или ввел только пробелы, выходим из функции
  }

  // Ищем секции меню
  const menuSections = document.querySelectorAll('.block-pizzas, .block-salads, .block-deserts, .block-drinks');

  // Проходимся по каждой секции меню
  menuSections.forEach(section => {
    const items = section.querySelectorAll('figcaption'); // Получаем все элементы секции меню

    // Проходимся по каждому элементу и проверяем наличие полного совпадения с поисковым запросом
    items.forEach(item => {
      const itemName = item.textContent.toLowerCase(); // Получаем текст элемента и приводим к нижнему регистру

      // Разделяем текст элемента на отдельные слова
      const words = itemName.split(' ');

      // Проверяем, чтобы хотя бы одно слово полностью совпадало с поисковым запросом
      const found = words.some(word => word === searchTerm);

      if (found) {
        // Нашли совпадение, "телепортируемся" к найденному товару, смещая его к центру страницы
        const itemElement = item.closest('figure');
        const itemRect = itemElement.getBoundingClientRect();
        const offset = itemRect.top - (window.innerHeight / 2 - itemRect.height / 2); // Вычисляем смещение

        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Назначаем обработчик события нажатия на кнопку "Найти"
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
    modal.style.display = "none"; // Скрываем модальное окно после завершения плавного закрытия
    modal.classList.remove("fade-out"); // Удаляем класс плавного закрытия
  }, 500);
}