export default class Card {
    constructor(data, template){
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._cardPopup = document.querySelector('#show-card-popup');
    }

    _showCard() {
        this._cardPopup.querySelector('.popup__image').src = this._link;
        this._cardPopup.querySelector('.popup__image').alt = this._name;
        this._cardPopup.querySelector('.popup__image-title').textContent = this._name;
        openPopup(this._cardPopup);
    }

    _toggleLike() {
        const currentButton = this._cardElement.querySelector('.like-button');
        currentButton.classList.toggle('like-button_active');
    }

    _removeCard() {
        console.log(this._cardElement);
        this._cardElement.remove();
    }

    _makeElement(){
        const cardTemplate = document.querySelector(this._template).content;
        this._cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    }

    renderCard() {
        this._makeElement();
        const cardImage = this._cardElement.querySelector('.card__image');
        cardImage.src = this._link;
        cardImage.alt = this._name;
        this._cardElement.querySelector('.card__title-text').innerText = this._name;
        const cardLikeButton = this._cardElement.querySelector('.like-button');
        const removeButton = this._cardElement.querySelector('.remove-button');
        cardLikeButton.addEventListener('click', () => this._toggleLike());
        removeButton.addEventListener('click', () => this._removeCard());
        cardImage.addEventListener('click', () => this._showCard());
        return this._cardElement;
    }
}
