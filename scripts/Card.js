import handleImagePopup from "../scripts/index.js";

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export default class Card {
  constructor(initialCards, cardSelector) {
    this._name = initialCards.name;
    this._link = initialCards.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const elementTemplate = document
      .querySelector("#elements__card-template")
      .content
      .querySelector(".elements__card")
      .cloneNode(true);

    return elementTemplate;
  }

  _handleDeleteCard() {
    this._deleteButtonCard.closest(".elements__card").remove();
  }

  _handleLikeCard() {
    this._likeButtonCard.classList.toggle("elements__like_active");
  }

  generateCard(initialCardsData) {
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector(".elements__title");
    this._elementImage = this._element.querySelector(".elements__image");
    this._deleteButtonCard = this._element.querySelector(".elements__basket");
    this._likeButtonCard = this._element.querySelector(".elements__like");
    this._elementTitle.textContent = initialCardsData.name;
    this._elementImage.src = initialCardsData.link;
    this._elementImage.alt = initialCardsData.name;

    this._deleteButtonCard.addEventListener("click", () => {
      this._handleDeleteCard()
    });

    this._likeButtonCard.addEventListener("click", () => {
      this._handleLikeCard();
    });

    this._elementImage.addEventListener("click", () => {
      handleImagePopup(initialCardsData);
    });

    return this._element;
  }
}