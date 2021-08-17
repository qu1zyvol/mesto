export default class FormValidator {
    constructor(validatorProps, formSelector) {
        const {
            inputSelector,
            submitButtonSelector,
            inactiveButtonClass,
            inputErrorClass,
            errorClass,
        } = validatorProps;

        const form = document.querySelector(formSelector);

        this._inputList = Array.from(form.querySelectorAll(inputSelector));
        this._submitButton = form.querySelector(submitButtonSelector);
        this._inactiveButtonClass = inactiveButtonClass;
        this._inputErrorClass = inputErrorClass;
        this._errorClass = errorClass;

        this._toggleButtonState = this._toggleButtonState.bind(this);
        this._showInputError = this._showInputError.bind(this);
        this._hideInputError = this._hideInputError.bind(this);
        this._hasInvalidInput = this._hasInvalidInput.bind(this);
        this._checkInputValidity = this._checkInputValidity.bind(this);
        this.resetValidation = this.resetValidation.bind(this);
        this.enableValidation = this.enableValidation.bind(this);
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = inputElement.nextElementSibling;
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    _hideInputError(inputElement) {
        const errorElement = inputElement.nextElementSibling
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    };

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        }
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => this._hideInputError(inputElement));
    }

    enableValidation() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };
}
