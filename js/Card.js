export default class Card {
    constructor(data, template, handleCardClick){
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }

    _toggleLike() {
        this._likeButton.classList.toggle('like-button_active');
    }

    _removeCard() {
        this._cardElement.remove();
    }

    _makeElement() {
        const cardTemplate = document.querySelector(this._template).content;
        this._cardElement = cardTemplate.querySelector('.card').cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.card__image');
        this._likeButton = this._cardElement.querySelector('.like-button');
        this._removeButton = this._cardElement.querySelector('.remove-button');
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => this._toggleLike());
        this._removeButton.addEventListener('click', () => this._removeCard());
        this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    }

    renderCard() {
        this._makeElement();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardElement.querySelector('.card__title-text').innerText = this._name;
        this._setEventListeners();
        return this._cardElement;
    }
}
