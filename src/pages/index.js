import './index.css';

import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/Api.js";

import {
  validationConfig,
  popupProfileForm,
  formElementCard,
  openPopupButton,
  nameInput,
  jobInput,
  openNewCardButton,
  elementsCardContainer,

} from "../scripts/utils/constants.js";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-44/',
  token: 'd2530845-e697-44f9-b4fb-404b485e2dca',
  'Content-Type': 'application/json'
});

// Добавление карточек и данных пользователя

let userId = null;

api.getUserInfo()
  .then((data) => {
    userId = data._id;
    userInfo.setUserInfo(data.name, data.about);
    userInfo.setUserAvatar(data);
  })
  .catch(err => console.log(err))

let defaultCards = null;

api.getInitialCards()
  .then((items) => {
    defaultCards = items;
    cardList.renderItems(items);
  })
  .catch(err => console.log(err))

// Открытие popup профиля и карточки

openNewCardButton.addEventListener("click", () => {
  addCardPopup.open();
  validateFormCard.buttonSubmitNoActive();
});

// Функция submit карточки
let card = null
const handleFormSubmitCard = (data) => {
    card = {
    name: data["title"],
    link: data["image"]
   };

  api.addNewCard(card)
  .then((data) => {
    cardList.addItem(createCard(data));
    addCardPopup.close();
  })
  .catch(err => console.log(err))
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
  renderer: (cardItem) => {
    const card = createCard(cardItem)
    cardList.addItem(card);
  }
},
elementsCardContainer);


// Функция submit профиль

const submitProfileFormHandler = (data) => {
  api.editProfile(data)
  .then((res) => {
    userInfo.setUserInfo(res.name, res.about)
  })
  .catch(err => console.log(err))
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

const userInfo = new UserInfo({profileNameSelector: ".profile__title", profileJobSelector: ".profile__subtitle", profileAvatar: ".profile__avatar"});

openPopupButton.addEventListener("click", () => {
  const {name, job} = userInfo.getUserInfo()
  nameInput.value = name;
  jobInput.value = job;
  editProfilePopup.open();
  validateFormProfile.buttonSubmitActive();
});