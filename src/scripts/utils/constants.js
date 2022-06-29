export const initialCards = [
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

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error_visible",
  errorText: ".error"
};

// Переменные формы

export const popupProfileForm = document.querySelector("#profile-form");
export const formElementCard = document.querySelector("#card-form");

// Переменные для работы с popup в профиле

export const openPopupButton = document.querySelector(".profile__button-edit");
export const ESC_KEYCODE = 27;

// Переменные input

export const nameInput = document.querySelector("#profile-name");
export const jobInput = document.querySelector("#profile-about");

// Переменные для открытия popup_card

export const openNewCardButton = document.querySelector(".profile__button-add");

// Переменные формы карточек
export const elementsCardContainer = document.querySelector(".elements__cards");