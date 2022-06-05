import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import { initialCards } from "../scripts/Card.js";
import { validationConfig } from "../scripts/FormValidator.js";
// Переменные формы

const popupProfileForm = document.querySelector("#profile-form");
const formElementCard = document.querySelector("#card-form");

// Переменные для работы с popup в профиле

const popupList = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup_profile")
const closeProfilePopup = document.querySelector(".popup__button-close_profile");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

// Переменные input

const nameInput = document.querySelector("#profile-name");
const jobInput = document.querySelector("#profile-about");

// Переменные для открытия popup_card

const openNewCardButton = document.querySelector(".profile__button-add");
const popupCard = document.querySelector(".popup_card");
const closeCardPopup = popupCard.querySelector(".popup__button-close_card");

// Переменные формы карточек
const elementsCardContainer = document.querySelector(".elements__cards");
const nameInputCard = document.querySelector("#card-name");
const aboutInputCard = document.querySelector("#card-link");

// Переменные для открытия popup_image

const popupImage = document.querySelector(".popup_image");
const elementPopupImage = document.querySelector(".popup__card-image");
const ImageTitle = document.querySelector(".popup__subtitle");
const closeImagePopup = document.querySelector(".popup__button-close_image");

// Функция открытия попапа

function openPopup(popupList) {
  popupList.classList.add("popup_opened");
  document.addEventListener("keydown", handleClosePopup);
  document.addEventListener("click", handleClosePopup);
};

// Открытие popup профиля и карточки

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
  validateFormProfile.buttonsSubmitActive();
};

function openPopupCard() {
  openPopup(popupCard);
  validateFormCard.buttonsSubmitNoActive();
};

openPopupButton.addEventListener("click", () => openPopupProfile());
openNewCardButton.addEventListener("click", () => openPopupCard());

// Функция закрытия попапа

function closePopup(popupList) {
  popupList.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleClosePopup);
  document.addEventListener("click", handleClosePopup);
};

closeProfilePopup.addEventListener("click", () => closePopup(popupProfile));
closeImagePopup.addEventListener("click", () => closePopup(popupImage));
closeCardPopup.addEventListener("click", () => closePopup(popupCard));

// Функция закрытия попапа overlay и esc

const handleClosePopup = (evt) => {
  const popupOpened = document.querySelector('.popup_opened');
  if ((popupOpened && evt.key === 'Escape') || evt.target === popupOpened) {
    closePopup(popupOpened);
  }
}
// Функция добавления данных в попап и его открытия

 export default function handleImagePopup(initialCardsData) {
  elementPopupImage.src = initialCardsData.link;
  ImageTitle.textContent = initialCardsData.name;
  elementPopupImage.alt = initialCardsData.name;
  openPopup(popupImage);
};

const renderElementsCard = (elementsCardContainer, newCard) => {
  elementsCardContainer.prepend(newCard);
};

function createCard(initialCardsData) {
  const newCard = new Card(initialCardsData, "#elements__card-template", handleImagePopup);
  return newCard.generateCard(initialCardsData);
 }

initialCards.forEach((initialCardsData) => {
  const newCard = createCard(initialCardsData);
  renderElementsCard(elementsCardContainer, newCard);
});

// Функция submit карточки

const handleFormSubmitCard = (event) => {
  event.preventDefault();
  renderElementsCard(elementsCardContainer, createCard({ name: nameInputCard.value, link: aboutInputCard.value }));
  closePopup(popupCard);
  event.target.reset();
};

formElementCard.addEventListener("submit", handleFormSubmitCard);

// Функция submit профиль

function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
};

popupProfileForm.addEventListener("submit", submitFormHandler);

const validateFormProfile = new FormValidator (validationConfig, popupProfileForm);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator (validationConfig, formElementCard);
validateFormCard.enableValidation();