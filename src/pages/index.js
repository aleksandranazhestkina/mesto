import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";

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
  // popupImage,
  // elementPopupImage,
  // ImageTitle,
  // closeImagePopup
} from "../scripts/utils/constants.js";

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
  validateFormProfile.buttonSubmitActive();
};

function openPopupCard() {
  openPopup(popupCard);
  validateFormCard.buttonSubmitNoActive();
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
// closeImagePopup.addEventListener("click", () => closePopup(popupImage));
closeCardPopup.addEventListener("click", () => closePopup(popupCard));

// Функция закрытия попапа overlay и esc

const handleClosePopup = (evt) => {
  const popupOpened = document.querySelector('.popup_opened');
  if ((popupOpened && evt.key === 'Escape') || evt.target === popupOpened) {
    closePopup(popupOpened);
  }
}
// Функция добавления данных в попап и его открытия

//  function handleImagePopup(link, name) {
//   elementPopupImage.src = link;
//   ImageTitle.textContent = name;
//   elementPopupImage.alt = name;
//   openPopup(popupImage);
// };

// Функция submit карточки

const handleFormSubmitCard = (event) => {
  event.preventDefault();
  const card = createCard({
     name: nameInputCard.value,
     link: aboutInputCard.value
    });
  cardList.addItem(card);
  closePopup(popupCard);
  event.target.reset();
};

formElementCard.addEventListener("submit", handleFormSubmitCard);

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

function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
};

popupProfileForm.addEventListener("submit", submitFormHandler);

const validateFormProfile = new FormValidator(validationConfig, popupProfileForm);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator(validationConfig, formElementCard);
validateFormCard.enableValidation();

const popupWithImage = new PopupWithImage(".popup_image");

popupWithImage.setEventListeners();








// // Функция открытия попапа

// function openPopup(popupList) {
//   popupList.classList.add("popup_opened");
//   document.addEventListener("keydown", handleClosePopup);
//   document.addEventListener("click", handleClosePopup);
// };

// // Открытие popup профиля и карточки

// function openPopupProfile() {
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
//   openPopup(popupProfile);
//   validateFormProfile.buttonSubmitActive();
// };

// function openPopupCard() {
//   openPopup(popupCard);
//   validateFormCard.buttonSubmitNoActive();
// };

// openPopupButton.addEventListener("click", () => openPopupProfile());
// openNewCardButton.addEventListener("click", () => openPopupCard());

// // Функция закрытия попапа

// function closePopup(popupList) {
//   popupList.classList.remove("popup_opened");
//   document.removeEventListener("keydown", handleClosePopup);
//   document.addEventListener("click", handleClosePopup);
// };

// closeProfilePopup.addEventListener("click", () => closePopup(popupProfile));
// closeImagePopup.addEventListener("click", () => closePopup(popupImage));
// closeCardPopup.addEventListener("click", () => closePopup(popupCard));

// // // Функция закрытия попапа overlay и esc

// const handleClosePopup = (evt) => {
//   const popupOpened = document.querySelector('.popup_opened');
//   if ((popupOpened && evt.key === 'Escape') || evt.target === popupOpened) {
//     closePopup(popupOpened);
//   }
// }
// // Функция добавления данных в попап и его открытия

// // function handleImagePopup(link, name) {
// //   elementPopupImage.src = link;
// //   ImageTitle.textContent = name;
// //   elementPopupImage.alt = name;
// //   openPopup(popupImage);
// // };

// // // Создание карточки
// const createCard = (initialCardsData) => {
//   const newCard = new Card(initialCardsData, "#elements__card-template", () => {
//     imagePopup.open(data.link, data.name)
//   });
//   return newCard.generateCard();
// };

// // // Добавление изначальных карточек

// // const renderCard = (item, wrap) => {
// //   const card = createCard(item);
// //   wrap.prepend(card);
// // };


// // Функция submit карточки

// const handleFormSubmitCard = (event) => {
//   event.preventDefault();
//   const card = createCard({
//     name: nameInputCard.value,
//     link: aboutInputCard.value
//   })
//   cardList.addItem(card);
//   closePopup(popupCard);
//   event.target.reset();
// };

// formElementCard.addEventListener("submit", handleFormSubmitCard);

// const cardList = new Section({items: initialCards,
//   renderer: (item) => {
//   const defaultCard = createCard(item, "elements__card-template");
//   defaultCardList.addItem(defaultCard);
// },
// },
// containerSelector);

// cardList.renderItems();

// // Функция submit профиль

// function submitFormHandler(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupProfile);
// };

// popupProfileForm.addEventListener("submit", submitFormHandler);

// const validateFormProfile = new FormValidator(validationConfig, popupProfileForm);
// validateFormProfile.enableValidation();
// const validateFormCard = new FormValidator(validationConfig, formElementCard);
// validateFormCard.enableValidation();

// // const cardList = new Section({
// //   items: initialCards,
// //   renderer: (cardItem) => {
// //     const newCard = new Card(
// //       {
// //         data: cardItem,
// //         handleCardClick: (name, link) => {
// //           const popupImageOpen = new PopupWithImage({
// //             name: name,
// //             link: link,
// //           },
// //           popupImage
// //           );
// //           popupImageOpen.open();
// //           popupImageOpen.setEventListeners();
// //         },
// //       },
// //       "#elements__card-template"
// //       );
// //     const cardElement = newCard.generateCard();
// //     cardList.addItem(cardElement);
// //   }
// // },
// //   elementsCardContainer);
// // cardList.renderItems();


