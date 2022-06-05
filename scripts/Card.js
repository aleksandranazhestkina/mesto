import handleImagePopup from "../scripts/index.js";
import { initialCards } from "../scripts/index.js"


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
    this._deleteButtonCard.this._element.remove();
    this._element = null;
  }

  _handleLikeCard() {
    this._likeButtonCard.classList.toggle("elements__like_active");
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector(".elements__title");
    this._elementImage = this._element.querySelector(".elements__image");
    this._deleteButtonCard = this._element.querySelector(".elements__basket");
    this._likeButtonCard = this._element.querySelector(".elements__like");
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

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