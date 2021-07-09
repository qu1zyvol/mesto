const showInputError = (inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (inputElement, inputErrorClass, errorClass) => {
    const errorElement = inputElement.nextElementSibling
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList ) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const checkInputValidity = (inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
        showInputError(inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(inputElement, inputErrorClass, errorClass);
    }
};

const toggleButtonState  = (inputList, buttonElement, inactiveClass) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(inactiveClass);
        buttonElement.disabled = false;
    }
}

const enableValidation = (validationProperties) => {
    const { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass} = validationProperties;
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(inputSelector));
        const buttonElement = formElement.querySelector(submitButtonSelector);
        toggleButtonState(inputList, buttonElement);
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function () {
                checkInputValidity(inputElement, inputErrorClass, errorClass);
                toggleButtonState(inputList, buttonElement, inactiveButtonClass);
            });
        });
    });
};

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});
