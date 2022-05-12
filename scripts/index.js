// Переменные формы

const popupProfileForm = document.querySelector("#profile-form");
const formElementCard = document.querySelector("#card-form");

// Переменные для работы с popup в профиле

const popupList = document.querySelector(".popup");
const openPopupButton = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup__profile")
const closeProfilePopup = document.querySelector(".popup__button-close_profile");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

// Переменные input

const nameInput = document.querySelector("#profile-name");
const jobInput = document.querySelector("#profile-about");
const buttonSave = document.querySelector("#profile-submit");
const buttonSaveCard = document.querySelector("#card-submit");

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
  document.addEventListener("keydown", heandleClosePopup);
  document.addEventListener("click", heandleClosePopup);
};

// Открытие popup профиля и карточки

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
  buttonsSubmitActive(buttonSave);
};

function openPopupCard(buttonSaveCard) {
  openPopup(popupCard);
  buttonsSubmitNoActive(buttonSaveCard);
};

openPopupButton.addEventListener("click", () => openPopupProfile());
openNewCardButton.addEventListener("click", () => openPopupCard(buttonSaveCard));

// Функция закрытия попапа

function closePopup(popupList) {
  popupList.classList.remove("popup_opened");
  document.removeEventListener("keydown", heandleClosePopup);
  document.addEventListener("click", heandleClosePopup);
};

closeProfilePopup.addEventListener("click", () => closePopup(popupProfile));
closeImagePopup.addEventListener("click", () => closePopup(popupImage));
closeCardPopup.addEventListener("click", () => closePopup(popupCard));

// Функция закрытия попапа overlay и esc

const heandleClosePopup = (evt) => {
  const popupOpened = document.querySelector('.popup_opened');
  if ((popupOpened && evt.key === 'Escape') || evt.target === popupOpened) {
    closePopup(popupOpened);
  }
};

// Шаблоны

const elementTemplate = document
  .querySelector("#elements__card-template")
  .content.querySelector(".elements__card");

// Функция добавления данных в попап и его открытия

function handleImagePopup(initialCardsData) {
  elementPopupImage.src = initialCardsData.link;
  ImageTitle.textContent = initialCardsData.name;
  elementPopupImage.alt = initialCardsData.name;
  openPopup(popupImage);
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

  const elementImage = newElementCard.querySelector(".elements__image");
  elementImage.src = initialCardsData.link;
  elementImage.alt = initialCardsData.name;

  const deleteButtonCard = newElementCard.querySelector(".elements__basket");
  deleteButtonCard.addEventListener("click", handleDeleteCard);

  const likeButtonCard = newElementCard.querySelector(".elements__like");
  likeButtonCard.addEventListener("click", handleLikeCard);

  elementImage.addEventListener("click", () =>
    handleImagePopup(initialCardsData));

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

const handleFormSubmitCard = (event) => {
  event.preventDefault();
  renderElementsCard({ name: nameInputCard.value, link: aboutInputCard.value });
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