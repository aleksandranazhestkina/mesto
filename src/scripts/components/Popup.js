export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
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
    const popupOpened = document.querySelector(".popup_opened");
    if ((popupOpened && evt.key === "Escape") || evt.target === popupOpened) {
      this.close();
    }
  }

  setEventListeners() {
    const iconClose = document.querySelector(".popup__button-close");
    iconClose.addEventListener("click", this.close(this._popupSelector));
    this._popupSelector.addEventListener("click", this._handleClose);
  }
}