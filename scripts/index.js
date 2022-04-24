// Переменные для работы с popup в профиле
const openPopupButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const closePopup = popup.querySelector(".popup__button-close");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const elementTitle = document.querySelector(".elements__title");
const elementImage = document.querySelector(".elements__image");

// Переменные input
const formElement = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_about");
const buttonSave = document.querySelector(".popup__button-save");
const buttonSaveCard = document.querySelector(".popup__button-save_card");

// Переменные для открытия popup__card
const openNewCardButton = document.querySelector(".profile__button-add");
const popupCard = document.querySelector(".popup_card");
const closeCardPopup = document.querySelector(".popup__button-close_card");

// Открытие popup с сохранением значений input

function popupOpenToggle() {
  popup.classList.toggle("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

openPopupButton.addEventListener("click", popupOpenToggle);
closePopup.addEventListener("click", popupOpenToggle);

// Функция submit профиль

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", formSubmitHandler);


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


// Переменные формы карточек

const elementsCardContainer = document.querySelector(".elements__cards");
const formElementCard = document.querySelector(".popup__form_card");
const nameInputCard = document.querySelector(".popup__input_card_name");
const aboutInputCard = document.querySelector(".popup__input_card_link");

// Добавление карточки

const renderElementsCard = (initialCardsData) => {
  elementsCardContainer.insertAdjacentHTML(
    "afterbegin",
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


// Открытие и закрытие попапа с карточками

function popupCardOpenToggle() {
  popupCard.classList.toggle("popup_opened");
};

openNewCardButton.addEventListener("click", popupCardOpenToggle);
closeCardPopup.addEventListener("click", popupCardOpenToggle);

// Функция submit карточки

const formSubmitHandlerCard = (event) => {
  event.preventDefault();
  renderElementsCard({name: nameInputCard.value, link: aboutInputCard.value});
  popupCard.classList.remove("popup_opened");
};

formElementCard.addEventListener("submit", formSubmitHandlerCard);