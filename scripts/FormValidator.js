export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error_visible",
  errorText: ".error"
};

export default class FormValidator {
  constructor(obj, formElement) {
    this._formSelector = obj.formSelector;
    this._inputSelector = obj.inputSelector;
    this._submitButtonSelector = obj.submitButtonSelector;
    this._inactiveButtonClass = obj.inactiveButtonClass;
    this._inputErrorClass = obj.inputErrorClass;
    this._errorClass = obj.errorClass;
    this._errorText = obj.errorText;

    this._formElement = formElement;
    this._submitButtonElement = formElement.querySelector(obj.submitButtonSelector);
    this._listInputs = Array.from(formElement.querySelectorAll(obj.inputSelector));
  }

  enableValidation = () => {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListener();
  }

    // Проверка полей
     _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showError(inputElement);
      } else {
        this._hideError(inputElement);
      }
    }

    _hasInvalidInput = () => {
      return this._listInputs.some((input) => {
        return !input.validity.valid;
      });
    }

    // Активность кнопки
    buttonsSubmitActive = () => {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.disabled = false;
    }

    buttonsSubmitNoActive = () => {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.setAttribute("disabled", true);
    }

    tooggleButtonState = () => {
      if (this._hasInvalidInput()) {
        this.buttonsSubmitNoActive();
      } else {
        this.buttonsSubmitActive();
      }
    }

    // Живая валидация
    _setEventListener = () => {
      this.tooggleButtonState();
      this._listInputs.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this.tooggleButtonState();
          this._checkInputValidity(inputElement);
        });
      });
    }

    // Отображение ошибки
    _showError = (inputElement) => {
      const errorELement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorELement.textContent = inputElement.validationMessage;
      errorELement.classList.add(this._errorClass);
    }

    // Скрытие ошибки
    _hideError = (inputElement) => {
      const errorELement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorELement.classList.remove(this._errorClass);
      errorELement.textContent = "";
    }
}