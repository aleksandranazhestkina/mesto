import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
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

function handleImagePopup(link, name) {
  elementPopupImage.src = link;
  ImageTitle.textContent = name;
  elementPopupImage.alt = name;
  openPopup(popupImage);
};

// добавление изначальных карточек
const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const newCard = new Card(cardItem, "#elements__card-template", handleImagePopup);
    const cardElement = newCard.generateCard();
    cardList.addItem(cardElement);
  }
},
elementsCardContainer);
cardList.renderItems();

// Создание карточки

// const createCard = (initialCardsData) => {
//   const newCard = new Card(initialCardsData, "#elements__card-template", handleImagePopup);
//   cardList.addItem(initialCardsData);
//   return newCard.generateCard(initialCardsData);
// }

// initialCards.forEach((initialCardsData) => {
//   const newCard = createCard(initialCardsData);

// });

// Функция submit карточки

const handleFormSubmitCard = (event) => {
  event.preventDefault();
  cardList.addItem(element, createCard({ name: nameInputCard.value, link: aboutInputCard.value }));
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

const validateFormProfile = new FormValidator(validationConfig, popupProfileForm);
validateFormProfile.enableValidation();
const validateFormCard = new FormValidator(validationConfig, formElementCard);
validateFormCard.enableValidation();

