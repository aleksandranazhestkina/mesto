import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopup = this._popupSelector.querySelector(".popup__card-image");
    this._textPopup = this._popupSelector.querySelector(".popup__subtitle");
  }
  open(link, name) {
    this._imagePopup.src = link;
    this._textPopup.textContent = name;
    this._imagePopup.alt = name;
    super.open();
  }
}