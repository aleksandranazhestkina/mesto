export default class Card {
  constructor(
    data,
    userId,
    cardSelector,
    handleImageClick,
    handleDeleteIconCard,
    addLikeCard,
    deleteLikeCard
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._likes = data.likes;
    this._handleDeleteIconCard = handleDeleteIconCard;
    this._cardUserId = data.owner._id;
    this._cardId = data._id;
    this._userId = userId;
    this._addLikeCard = addLikeCard;
    this._deleteLikeCard = deleteLikeCard;
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".elements__like");
    this._likeNumber = this._element.querySelector(".elements__like-number");
  }

  _getTemplate() {
    const elementTemplate = document
      .querySelector("#elements__card-template")
      .content.querySelector(".elements__card")
      .cloneNode(true);
    return elementTemplate;
  }

  handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setLikes() {
    this._likeNumber.textContent = this._likes.length;
  }

  _handleDelCardVisible() {
    if (this._cardUserId === this._userId) {
      this._deleteButtonCard.classList.add("elements__basket_visible");
    }
  }

  getId() {
    return this._cardId;
  }

  _findMyLike() {
    return this._likes.some((like) => like._id === this._userId);
  }

  _toggleLikeCard() {
    this._setLikes();
    if (this._findMyLike()) {
      this._likeButton.classList.add("elements__like_active");
    } else {
      this._likeButton.classList.remove("elements__like_active");
    }
  }

  setLikesNumber(data) {
    this._likes = data.likes;
    this._toggleLikeCard();
  }

  _setEventListeners() {
    this._deleteButtonCard.addEventListener("click", () => {
      this._handleDeleteIconCard(this);
    });

    this._likeButtonCard.addEventListener("click", () => {
      if (this._findMyLike()) {
        this._deleteLikeCard(this);
      } else {
        this._addLikeCard(this);
      }
    });

    this._elementImage.addEventListener("click", () => {
      this._handleImageClick(this._link, this._name);
    });
  }

  generateCard() {
    this._elementTitle = this._element.querySelector(".elements__title");
    this._elementImage = this._element.querySelector(".elements__image");
    this._likeButtonCard = this._element.querySelector(".elements__like");
    this._deleteButtonCard = this._element.querySelector(".elements__basket");
    this._toggleLikeCard();
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._handleDelCardVisible();
    this._setEventListeners();
    return this._element;
  }
}
