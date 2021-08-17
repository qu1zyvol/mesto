import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelector, beforeOpen, formSubmitHandler, initialValues = {}) {
        super(popupSelector);
        this.form = this.popup.querySelector('form');
        this.formSubmitHandler = formSubmitHandler;
        this.beforeOpen = beforeOpen;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._setEventListeners = this._setEventListeners.bind(this);
        this._removeEventListeners = this._removeEventListeners.bind(this);
        this._onFormSubmit = this._onFormSubmit.bind(this);
        this._getInputValues = this._getInputValues.bind(this);
        this._setInitialValues = this._getInputValues.bind(this);
        this.initialValues = initialValues;
    }

    _setInitialValues(){
        if(Object.keys(this.initialValues).length > 0){
            const inputs = this.form.querySelectorAll('input');
            inputs.forEach(input => {
                input.value = this.initialValues[input.name];
            });
        }
    }

    _getInputValues(){
        const formData = new FormData(this.form);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        return object;
    }

    _onFormSubmit(e) {
        e.preventDefault();
        const data = this._getInputValues();
        this.formSubmitHandler(data);
        this.form.reset();
        this.close();
    }

    _setEventListeners() {
        super._setEventListeners();
        this.form.addEventListener('submit', this._onFormSubmit);
    }

    _removeEventListeners() {
        super._removeEventListeners();
        this.form.removeEventListener('submit', this._onFormSubmit);
    }

    open() {
        this.beforeOpen();
        this._setInitialValues();
        super.open();
    }

    close() {
        this.form.reset();
        super.close();
    }

}

export default PopupWithForm;
