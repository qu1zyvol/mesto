import Popup from "./Popup.js";

class PopupDeleteConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.actionHandler = null;
        this.actionButton = this.popup.querySelector('.popup__save-button');
        this.open = this.open.bind(this);
        this._actionButtonClick = this._actionButtonClick.bind(this);
    }

    _actionButtonClick(){
        try {
            this.actionHandler();
            this.close();
        }catch (e){
            console.log(e);
        }
    }

    close() {
        super.close();
        this.actionButton.removeEventListener('click', this._actionButtonClick);
    }


    open(actionHandler) {
        super.open();
        this.actionHandler = actionHandler;
        this.actionButton.addEventListener('click', this._actionButtonClick);
    }
}

export default PopupDeleteConfirm;
