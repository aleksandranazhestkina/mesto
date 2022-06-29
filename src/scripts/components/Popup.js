import { ESC_KEYCODE } from "../utils/constants.js";

export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleClose);
    document.addEventListener("click", this._handleClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleClose);
    document.addEventListener("click", this._handleClose);
  }

  _handleEscClose(evt) {

    if (evt.which === ESC_KEYCODE) {
      this.close();
    }
  }

  setEventListeners() {
    const iconClose = this._popupSelector.querySelector(".popup__button-close");
    this._popupSelector.addEventListener("click", (e) => {
      if(!e.target.closest(".popup__container") || e.target === iconClose) {
        this.close();
      }
    });
  }
}