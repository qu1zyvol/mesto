import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.popupImage = this.popup.querySelector('.popup__image');
        this.popupTitle = this.popup.querySelector('.popup__image-title');
        this.open = this.open.bind(this);
    }

    open(name, image) {
        this.popupImage.src = image;
        this.popupImage.alt = name;
        this.popupTitle.textContent = name;
        super.open();
    }
}

export default PopupWithImage;
