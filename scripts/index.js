const openPopupButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const closePopup = popup.querySelector(".popup__button-close");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

// Массив карточек

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Шаблоны



// Дом элементы

const elementsCardContainer = document.querySelector(".elements__cards");


// Обработчики событий



// Генерация карточки



// Добавление карточки

const renderElementsCard = (initialCardsData) => {
  elementsCardContainer.insertAdjacentHTML(
    "beforeend",
    `
    <li class="elements__card">
    <img class="elements__image" src="${initialCardsData.link}">
    <div class="elements__text">
      <h2 class="elements__title">${initialCardsData.name}</h2>
      <button class="elements__like" type="button"></button>
    </div>
  </li>
    `
  );
};

initialCards.forEach((initialCardsData) => {
  renderElementsCard(initialCardsData);
});



// Открытие popup с сохранением значений input

function popupOpenToggle() {
  popup.classList.toggle("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Слушатели кнопок открытия и закрытия

openPopupButton.addEventListener("click", popupOpenToggle);
closePopup.addEventListener("click", popupOpenToggle);

// Переменные input

let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_about");
let buttonSave = document.querySelector(".popup__button-save");

// Функция submit

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", formSubmitHandler);
