const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error_visible",
  errorText: ".error"
};

// Показ ошибки

const showError = (formElement, inputElement, errorMessage) => {
  const errorELement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(enableValidation.inputErrorClass);
  errorELement.textContent = errorMessage;
  errorELement.classList.add(enableValidation.errorClass);
};

// Скрытие ошибки

const hideError = (formElement, inputElement) => {
  const errorELement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(enableValidation.inputErrorClass);
  errorELement.classList.remove(enableValidation.errorClass);
  errorELement.textContent = "";
};

// Проверка инпутов на валидность

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => !input.validity.valid);
};

// Активность кнопки

const buttonsSubmitActive = (buttonsSubmit) => {
  buttonsSubmit.classList.remove(enableValidation.inactiveButtonClass);
  buttonsSubmit.disabled = false;
};

const buttonsSubmitNoActive = (buttonsSubmit) => {
  buttonsSubmit.classList.add(enableValidation.inactiveButtonClass);
  buttonsSubmit.setAttribute("disabled", true);
};

const tooggleButtonState = (inputList, buttonsSubmit) => {
  if (hasInvalidInput(inputList)) {
    buttonsSubmitNoActive(buttonsSubmit);
  } else {
    buttonsSubmitActive(buttonsSubmit);
  }
};

// Живая валидация

const setEventListener = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(enableValidation.inputSelector)
  );
  const buttonsSubmit = formElement.querySelector(
    enableValidation.submitButtonSelector);
  tooggleButtonState(inputList, buttonsSubmit);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      tooggleButtonState(inputList, buttonsSubmit);
      checkInputValidity(formElement, inputElement);
    });
  });
};

// Функция создания массива всех форм

function isValid() {
  const formList = Array.from(
    document.querySelectorAll(enableValidation.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListener(formElement);
  });
};

isValid();