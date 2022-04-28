// Переменные для работы с popup в профиле
const openPopupButton = document.querySelector(".profile__button-edit");
const popup = document.querySelector(".popup");
const closePopup = popup.querySelector(".popup__button-close");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

// Переменные input
const formElement = popup.querySelector(".popup__form");
const nameInput = popup.querySelector(".popup__input_name");
const jobInput = popup.querySelector(".popup__input_about");
const buttonSave = popup.querySelector(".popup__button-save");
const buttonSaveCard = popup.querySelector(".popup__button-save_card");

// Переменные для открытия popup_card
const openNewCardButton = document.querySelector(".profile__button-add");
const popupCard = document.querySelector(".popup_card");
const closeCardPopup = popupCard.querySelector(".popup__button-close_card");

// Переменные формы карточек

const elementsCardContainer = document.querySelector(".elements__cards");
const formElementCard = document.querySelector(".popup__form_card");
const nameInputCard = document.querySelector(".popup__input_card_name");
const aboutInputCard = document.querySelector(".popup__input_card_link");

// Переменные для открытия popup_image

const popupImage = document.querySelector(".popup_image");
const elementPopupImage = document.querySelector(".popup__card-image");
const ImageTitle = document.querySelector(".popup__subtitle");

// Открытие popup профиля с сохранением значений input

function openPopupToggle() {
  popup.classList.toggle("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

openPopupButton.addEventListener("click", openPopupToggle);
closePopup.addEventListener("click", openPopupToggle);

// Открытие и закрытие попапа с картинкой

function popupCardOpenToggle() {
  popupCard.classList.toggle("popup_opened");
};

openNewCardButton.addEventListener("click", popupCardOpenToggle);
closeCardPopup.addEventListener("click", popupCardOpenToggle);

// Открытие и закрытие попапа с картинкой

const closeImagePopup = document.querySelector(".popup__button-close_image");
closeImagePopup.addEventListener("click", closePopupImage);

function openPopupImage(popupImage) {
  popupImage.classList.add("popup_opened");
};

function closePopupImage(evt) {
  evt.target.closest(".popup_opened").classList.remove("popup_opened");
};

// Шаблоны

const elementTemplate = document
  .querySelector("#elements__card-template")
  .content.querySelector(".elements__card");

// Функция добавления данных в попап и его открытия

function handlerImagePopup(initialCardsData) {
  elementPopupImage.src = initialCardsData.link;
  ImageTitle.textContent = initialCardsData.name;

  openPopupImage(popupImage);
};

// Обработчики событий для карточек

const handleDeleteCard = (event) => {
  event.target.closest(".elements__card").remove();
};

function handleLikeCard(event) {
  event.target.classList.toggle("elements__like_active");
};

// Генерация карточки

const generateElementCard = (initialCardsData) => {
  const newElementCard = elementTemplate.cloneNode(true);

  const elementTitle = newElementCard.querySelector(".elements__title");
  elementTitle.textContent = initialCardsData.name;
  elementTitle.alt = initialCardsData.name;

  const elementImage = newElementCard.querySelector(".elements__image");
  elementImage.src = initialCardsData.link;

  const deleteButtonCard = newElementCard.querySelector(".elements__basket");
  deleteButtonCard.addEventListener("click", handleDeleteCard);

  const likeButtonCard = newElementCard.querySelector(".elements__like");
  likeButtonCard.addEventListener("click", handleLikeCard);

  elementImage.addEventListener("click", () =>
  handlerImagePopup(initialCardsData));

  return newElementCard;
};

// Добавление карточки

const renderElementsCard = (initialCardsData) => {
  elementsCardContainer.prepend(generateElementCard(initialCardsData));
};

initialCards.forEach((initialCardsData) => {
  renderElementsCard(initialCardsData);
});

// Функция submit карточки

const formSubmitHandlerCard = (event) => {
  event.preventDefault();
  renderElementsCard({ name: nameInputCard.value, link: aboutInputCard.value });
  popupCard.classList.remove("popup_opened");
};

formElementCard.addEventListener("submit", formSubmitHandlerCard);

// Функция submit профиль

function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove("popup_opened");
};

formElement.addEventListener("submit", submitFormHandler);


