// Переменные для работы с popup в профиле
const popup = document.querySelectorAll(".popup");
const openPopupButton = document.querySelector(".profile__button-edit");
const popupProfile = document.querySelector(".popup__profile")
const closeProfilePopup = document.querySelector(".popup__button-close");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

// Переменные input
const popupProfileForm = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_about");
const buttonSave = document.querySelector(".popup__button-save");
const buttonSaveCard = document.querySelector(".popup__button-save_card");

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
const closeImagePopup = document.querySelector(".popup__button-close_image");

// Функция открытия попапа

function openPopup(popup) {
  popup.classList.add("popup_opened");
};

openPopupButton.addEventListener("click", () => openPopupProfile());
openNewCardButton.addEventListener("click", () => openPopup(popupCard));

// Функция закрытия попапа

function closePopup(popup) {
  popup.classList.remove("popup_opened");
};

closeProfilePopup.addEventListener("click", () => closePopup(popupProfile));
closeImagePopup.addEventListener("click", () => closePopup(popupImage));
closeCardPopup.addEventListener("click", () => closePopup(popupCard));


// Функция закрытия попапа overlay

function closePopupProfileOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popupProfile);
  }
}

function closePopupImageOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popupImage);
  }
}

function closePopupCardOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(popupCard);
  }
}

popupProfile.addEventListener("click", closePopupProfileOverlay);
popupImage.addEventListener("click", closePopupImageOverlay);
popupCard.addEventListener("click", closePopupCardOverlay);

// 

// Открытие popup профиля с сохранением значений input

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
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
  closePopup(formElementCard);
  event.target.reset();
};

formElementCard.addEventListener("submit", handleFormSubmitCard);

// Функция submit профиль

function submitFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileForm);
};

popupProfileForm.addEventListener("submit", submitFormHandler);