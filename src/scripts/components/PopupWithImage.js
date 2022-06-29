import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    open(link, name) {
    super.open();
    const imagePopup = this._popupSelector.querySelector(".popup__card-image");
    const textPopup = this._popupSelector.querySelector(".popup__subtitle");
    imagePopup.src = link;
    textPopup.textContent = name;
    imagePopup.alt = name;
  }
}