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
    buttonSubmitActive = () => {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.disabled = false;
    }

    buttonSubmitNoActive = () => {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.setAttribute("disabled", true);
    }

    toggleButtonState = () => {
      if (this._hasInvalidInput()) {
        this.buttonSubmitNoActive();
      } else {
        this.buttonSubmitActive();
      }
    }

    // Живая валидация
    _setEventListener = () => {
      this.toggleButtonState();
      this._listInputs.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this.toggleButtonState();
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