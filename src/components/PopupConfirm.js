import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = document.querySelector("#confirm-form");
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallBack();
    });
  }

  setSubmitAction(action) {
    this._handleSubmitCallBack = action;
  }
}