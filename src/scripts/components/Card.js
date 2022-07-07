export default class Card {
  constructor(data, userId, cardSelector, handleImageClick, handleDeleteIconCard) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._likes = data.likes;
    this._handleDeleteIconCard = handleDeleteIconCard;
    // this._addLike = addLike;
    // this._deleteLike = deleteLike;
    this._cardUserId = data.owner._id;
    this._cardId = data._id
    this._userId = userId;
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

  setLikes() {
    this._element.querySelector(".elements__like-number").textContent = this._likes.length;
  }

  handleDelCardVisible() {
    if(this._cardUserId === this._userId) {
      this._deleteButtonCard
      .classList.add("elements__basket_visible");
    }

  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementTitle = this._element.querySelector(".elements__title");
    this._elementImage = this._element.querySelector(".elements__image");
    this._likeButtonCard = this._element.querySelector(".elements__like");
    this._deleteButtonCard = this._element.querySelector(".elements__basket");
    this.setLikes();
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this.handleDelCardVisible();

    this._deleteButtonCard.addEventListener("click", () => {
      this._handleDeleteCard();
      this._handleDeleteIconCard();
    });

    this._likeButtonCard.addEventListener("click", () => {
      this._handleLikeCard();
    });

    this._elementImage.addEventListener("click", () => {
      this._handleImageClick(this._link, this._name);
    });

    return this._element;
  }
}