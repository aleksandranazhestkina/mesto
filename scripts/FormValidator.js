const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "error_visible",
  errorText: ".error"
};

// Показ ошибки

const showError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorELement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorELement.textContent = errorMessage;
  errorELement.classList.add(validationConfig.errorClass);
};

// Скрытие ошибки

const hideError = (formElement, inputElement, validationConfig) => {
  const errorELement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorELement.classList.remove(validationConfig.errorClass);
  errorELement.textContent = "";
};

// Проверка инпутов на валидность

const checkInputValidity = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideError(formElement, inputElement, validationConfig);
  }
};

const hasInvalidInput = (inputList, validationConfig) => {
  return inputList.some((input) => !input.validity.valid);
};

// Активность кнопки

const buttonsSubmitActive = (buttonsSubmit) => {
  buttonsSubmit.classList.remove(validationConfig.inactiveButtonClass);
  buttonsSubmit.disabled = false;
};

const buttonsSubmitNoActive = (buttonsSubmit) => {
  buttonsSubmit.classList.add(validationConfig.inactiveButtonClass);
  buttonsSubmit.setAttribute("disabled", true);
};

const tooggleButtonState = (inputList, buttonsSubmit, validationConfig) => {
  if (hasInvalidInput(inputList, validationConfig)) {
    buttonsSubmitNoActive(buttonsSubmit, validationConfig);
  } else {
    buttonsSubmitActive(buttonsSubmit, validationConfig);
  }
};

// Живая валидация

const setEventListener = (formElement, validationConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  const buttonsSubmit = formElement.querySelector(
    validationConfig.submitButtonSelector);
  tooggleButtonState(inputList, buttonsSubmit, validationConfig);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      tooggleButtonState(inputList, buttonsSubmit, validationConfig);
      checkInputValidity(formElement, inputElement, validationConfig);
    });
  });
};

// Функция создания массива всех форм

function enableValidation (validationConfig) {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListener(formElement, validationConfig);
  });
};

enableValidation (validationConfig);