export default class Card {
    constructor(data, template, handleCardClick, api){
        this._setCardData(data);
        this._userId = data.userId;
        this._handleCardClick = handleCardClick;
        this._template = template;
        this._api = api;
    }

    _setCardData(data){
        console.log(data);
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._id = data._id;
        this._ownerId = data.owner._id;
    }

    _toggleLike() {
        this._api.toggleLike(this._id, this._isCardLiked()).then((cardData) => {
            this._setCardData(cardData);
            this._setLikeActive(this._isCardLiked());
            this._setLikesCount();
        });
    }

    _isCardLiked(){
        return this._likes.some(like => like._id === this._userId);
    }

    _setLikeActive(active){
        if(active){
            this._likeButton.classList.add('like-button_active');
        }else{
            this._likeButton.classList.remove('like-button_active');
        }
    }

    _removeCard() {
        this._api.deleteCard(this._id).then(() => {
            this._cardElement.remove();
        });
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

    _setLikesCount(){
        this._cardElement.querySelector('.card__likes-count').innerText = this._likes.length;
    }

    renderCard() {
        this._makeElement();
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardElement.querySelector('.card__title-text').innerText = this._name;
        this._setLikesCount();
        this._setLikeActive(this._isCardLiked());
        this._setEventListeners();
        if(this._ownerId !== this._userId){
            this._removeButton.remove();
        }
        return this._cardElement;
    }
}
