import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupConfirm from '../components/PopupConfirm';

import {
  validationConfig,
  popupProfileForm,
  formElementCard,
  avatarForm,
  openPopupButton,
  nameInput,
  jobInput,
  openNewCardButton,
  elementsCardContainer,
  avatarButton

} from "../utils/constants.js";

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-44/',
  token: 'd2530845-e697-44f9-b4fb-404b485e2dca',
  'Content-Type': 'application/json'
});

// Добавление карточек и данных пользователя
let userId = null;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, items]) => {
    userId = data._id;
    userInfo.setUserInfo(data.name, data.about);
    userInfo.setUserAvatar(data);
    cardList.renderItems(items);
  })
  .catch(err => console.log(err))

// Открытие popup карточки

openNewCardButton.addEventListener("click", () => {
  addCardPopup.open();
  validateFormCard.buttonSubmitNoActive();
});

// Открытие попава аватара

avatarButton.addEventListener("click", () => {
  editAvatarPopup.open();
  validateFormAvatar.buttonSubmitNoActive();
});

// Функция submit карточки

const handleFormSubmitCard = (data) => {
  let card = {
    name: data.title,
    link: data.image
  };
  addCardPopup.renderLoading(true);
  api.addNewCard(card)
    .then((data) => {
      cardList.addItem(createCard(data));
      addCardPopup.close();
    })
    .catch(err => console.log(err))
    .finally(() => {
      addCardPopup.renderLoading(false);
    })
};

// Создание новой карточки

const createCard = (cardItem) => {
  const newCard = new Card(cardItem, userId, "#elements__card-template", () => {
    popupWithImage.open(cardItem.link, cardItem.name)
  }, handleDeleteIconCard, addLikeCard, deleteLikeCard)
  return newCard.generateCard();
};

function addLikeCard(card) {
  return api.addLike(card.getId())
    .then((data) => {
      this.setLikesNumber(data);
    })
    .catch(err => console.log(err))
}

function deleteLikeCard(card) {
  return api.deleteLike(card.getId())
    .then((data) => {
      this.setLikesNumber(data);
    })
    .catch(err => console.log(err))
}

// Удаление карточки

function handleDeleteIconCard(card) {
  confirmDelete.open();
  confirmDelete.setSubmitAction(() => {
    api.deleteCard(card.getId())
      .then(() => {
        this.handleDeleteCard(card);
        confirmDelete.close();
      })
      .catch(err => console.log(err))
  })
}

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
  editProfilePopup.renderLoading(true);
  api.editProfile(data)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about)
    })
    .catch(err => console.log(err))
    .finally(() => {
      editProfilePopup.renderLoading(false)
      editProfilePopup.close()
    })
};

// Функция submit аватар

const handleAvatarSubmit = (link) => {
  editAvatarPopup.renderLoading(true)
  api.editAvatar(link)
    .then((res) => {
      userInfo.setUserAvatar(res)
      editAvatarPopup.close()
    }).catch(err => console.log(err))
    .finally(() => {
      editAvatarPopup.renderLoading(false)
    })
}

// Создание классов валидации

const validateFormProfile = new FormValidator(validationConfig, popupProfileForm);
validateFormProfile.enableValidation();

const validateFormCard = new FormValidator(validationConfig, formElementCard);
validateFormCard.enableValidation();

const validateFormAvatar = new FormValidator(validationConfig, avatarForm);
validateFormAvatar.enableValidation();

// Создание классов попапов с формами

const popupWithImage = new PopupWithImage(".popup_image");
popupWithImage.setEventListeners();

const editProfilePopup = new PopupWithForm(".popup_profile", submitProfileFormHandler);
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm(".popup_card", handleFormSubmitCard);
addCardPopup.setEventListeners();

const editAvatarPopup = new PopupWithForm(".popup_avatar", handleAvatarSubmit);
editAvatarPopup.setEventListeners()

const confirmDelete = new PopupConfirm(".popup_delete");
confirmDelete.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector: ".profile__title", profileJobSelector: ".profile__subtitle", profileAvatar: ".profile__avatar" });

openPopupButton.addEventListener("click", () => {
  const { name, job } = userInfo.getUserInfo()
  nameInput.value = name;
  jobInput.value = job;
  editProfilePopup.open();
  validateFormProfile.buttonSubmitActive();
});