

export default class Card {
  constructor(data, cardSelector, handleImagePopup) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImagePopup = handleImagePopup;
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
    this._element.remove();
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
      this._handleImagePopup(this._link, this._name);
    });

    return this._element;
  }
}