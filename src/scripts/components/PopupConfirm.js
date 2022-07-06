import Popup from "./Popup";

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = document.querySelector("#confirm-form");
  }

  setSubmitAction(action) {
    this._handleSubmitCallBack = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.defaultPrevented();
      this._handleSubmitCallBack();
    });
  }
}