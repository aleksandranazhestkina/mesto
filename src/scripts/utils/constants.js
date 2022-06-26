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

export const popupList = document.querySelector(".popup");
export const openPopupButton = document.querySelector(".profile__button-edit");
export const popupProfile = document.querySelector(".popup_profile")
export const closeProfilePopup = document.querySelector(".popup__button-close_profile");
export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");

// Переменные input

export const nameInput = document.querySelector("#profile-name");
export const jobInput = document.querySelector("#profile-about");

// Переменные для открытия popup_card

export const openNewCardButton = document.querySelector(".profile__button-add");
export const popupCard = document.querySelector(".popup_card");
export const closeCardPopup = popupCard.querySelector(".popup__button-close_card");

// Переменные формы карточек
export const elementsCardContainer = document.querySelector(".elements__cards");
export const nameInputCard = document.querySelector("#card-name");
export const aboutInputCard = document.querySelector("#card-link");

// Переменные для открытия popup_image

export const popupImage = document.querySelector(".popup_image");
export const elementPopupImage = document.querySelector(".popup__card-image");
export const ImageTitle = document.querySelector(".popup__subtitle");
export const closeImagePopup = document.querySelector(".popup__button-close_image");