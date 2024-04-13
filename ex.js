// Добавьте следующий код в ваш файл JavaScript или между тегами <script></script>

// Находим элементы модального окна и изображения пиццы
var modal = document.getElementById("modal");
var pizzaImage = document.getElementsByClassName("pizza-image")[0];
var closeButton = document.getElementsByClassName("close")[0];
var pizzaName = document.getElementById("pizza-name");
var pizzaDescription = document.getElementById("pizza-description");

// Функция для открытия модального окна с информацией о пицце
function openModal(imageSrc, name, description) {
  modal.style.display = "block"; // Отображаем модальное окно
  setTimeout(function() {
    modal.classList.add("show"); // Добавляем класс для плавного появления
  }, 10);
  pizzaImage.src = imageSrc; // Устанавливаем изображение пиццы
  pizzaName.textContent = name; // Устанавливаем название пиццы
  pizzaDescription.textContent = description; // Устанавливаем описание пиццы
}

// Функция для закрытия модального окна
function closeModal() {
  modal.classList.remove("show"); // Удаляем класс для плавного исчезновения
  setTimeout(function() {
    modal.style.display = "none"; // Скрываем модальное окно
  }, 300);
}

// Назначаем обработчик события для открытия модального окна при клике на изображение пиццы
pizzaImage.addEventListener("click", function() {
  openModal("images/4seasons.jpg", "4 Seasons Pizza", "Классическая пицца с четырьмя сезонами: ветчина, грибы, перец и маслины.");
});

// Назначаем обработчик события для закрытия модального окна при клике на кнопку закрытия
closeButton.addEventListener("click", closeModal);