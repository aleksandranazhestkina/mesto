const openPopupButton = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup__button-close');
const ESC_KEY = "Escape";
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

function popupOpenToggle() {
  popup.classList.toggle('popup__opened');
  profileName.textContent;
  profileJob.textContent;
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function onDocumentKeyUp(event) {
  if (event.click === ESC_KEY) {
    popupOpenToggle();
  }
}

openPopupButton.addEventListener('click', popupOpenToggle);
closePopup.addEventListener('click', popupOpenToggle);

let formElement = document.querySelector('.popup__body');
let nameInput = document.querySelector('.popup__line-name');
let jobInput = document.querySelector('.popup__line-about');
let buttonSave = document.querySelector('.popup__button-save')

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.value;
  jobInput.value;
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popup.classList.remove('popup__opened');
}

formElement.addEventListener('submit', formSubmitHandler);