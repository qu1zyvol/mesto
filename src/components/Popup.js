class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._removeEventListeners = this._removeEventListeners.bind(this);
        this._setEventListeners = this._setEventListeners.bind(this);
        this._handleCLickAnyway = this._handleCLickAnyway.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(e) {
        if (e.key === 'Escape') this.close();
    }

    _handleCLickAnyway(e) {
        const target = e.target;
        if (target.classList.contains('popup_visible')) {
            this.close();
        }
    }

    _setEventListeners() {
        console.log(this.popup);
        document.addEventListener('keydown', this._handleEscClose);
        this.popup.addEventListener('mousedown', this._handleCLickAnyway);
        this.popup.querySelector('.popup__close-button').addEventListener('click', this.close);
    }

    _removeEventListeners(){
        document.removeEventListener('keydown', this._handleEscClose);
        this.popup.removeEventListener('mousedown', this._handleCLickAnyway);
        this.popup.querySelector('.popup__close-button').removeEventListener('click', this.close);
    }

    open(){
        this.popup.classList.add('popup_visible');
        this._setEventListeners();
    }

    close(){
        this.popup.classList.remove('popup_visible');
        this._removeEventListeners();
    }
}

export default Popup;
