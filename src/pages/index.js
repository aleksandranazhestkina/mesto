import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import { UserInfo } from "../scripts/components/UserInfo.js";

import {
  initialCards,
  validationConfig,
  popupProfileForm,
  formElementCard,
  popupList,
  openPopupButton,
  popupProfile,
  closeProfilePopup,
  profileName,
  profileJob,
  nameInput,
  jobInput,
  openNewCardButton,
  popupCard,
  closeCardPopup,
  elementsCardContainer,
  nameInputCard,
  aboutInputCard,
  popupImage,
  elementPopupImage,
  ImageTitle,
  closeImagePopup
} from "../scripts/utils/constants.js";

// Открытие popup профиля и карточки

openNewCardButton.addEventListener("click", () => {
  addCardPopup.open();
  validateFormCard.buttonSubmitNoActive();
});

// Функция submit карточки

const handleFormSubmitCard = (data) => {

  const card = createCard({
     name: data["title"],
     link: data["image"]
    });
  cardList.addItem(card);
  addCardPopup.close();
};

// Создание новой карточки

const createCard = (cardItem) => {
  const newCard = new Card(cardItem, "#elements__card-template", () => {
    popupWithImage.open(cardItem.link, cardItem.name)
  });
  return newCard.generateCard();
};

// Добавление дефолтных карточек

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const card = createCard(cardItem)
    cardList.addItem(card);
  }
},
elementsCardContainer);
cardList.renderItems();

// Функция submit профиль

const submitProfileFormHandler = (data) => {
  const { name, job } = data;
  profileName.textContent = name;
  profileJob.textContent = job;
  editProfilePopup.close();
};

// Создание классов валидации

const validateFormProfile = new FormValidator(validationConfig, popupProfileForm);
validateFormProfile.enableValidation();

const validateFormCard = new FormValidator(validationConfig, formElementCard);
validateFormCard.enableValidation();

// Создание классов попапов с формами

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();

const editProfilePopup = new PopupWithForm(".popup_profile", submitProfileFormHandler);
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(".popup_card", handleFormSubmitCard);
addCardPopup.setEventListeners();

const userInfo = new UserInfo({profileNameSelector: ".profile__title", profileJobSelector: ".profile__subtitle"});

openPopupButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  editProfilePopup.open();
  validateFormProfile.buttonSubmitActive();
});