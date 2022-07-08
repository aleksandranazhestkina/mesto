import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popupSelector.querySelector(".popup__form");
    this._buttonSave = this._popupSelector.querySelector(".popup__button-save");
  }

  _getInputValues() {
    const inputs = [...this._form.querySelectorAll(".popup__input")];
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderLoading(isLoad) {
    if(isLoad) {
      this._buttonSave.textContent = 'Сохранение...';
    } else {
      this._buttonSave.textContent = 'Сохранить';
    }

  }
}