const cardTemplate = document.querySelector('#card').content;
const showCardPopup = document.querySelector('#show-card-popup');

const initialCards = [
    {
        name: 'Москва',
        link: 'images/card/moscow.jpg'
    },
    {
        name: 'Питер',
        link: 'images/card/piter.jpg'
    },
    {
        name: 'Карелия',
        link: 'images/card/karelia.jpg'
    },
    {
        name: 'Республика Коми',
        link: 'images/card/komi.jpg'
    },
    {
        name: 'Иркутск',
        link: 'images/card/irkutsk.jpg'
    },
    {
        name: 'Казань',
        link: 'images/card/kazan.jpg'
    },
];

function closeCard(e){
    showCardPopup.classList.remove('popup_visible');
    showCardPopup.querySelector('.popup__close-button').removeEventListener('click', closeCard);
}

function showCard(e){
    const imageTarget = e.target;
    showCardPopup.querySelector('.popup__image').src = imageTarget.src;
    showCardPopup.querySelector('.popup__image').alt = imageTarget.alt;
    showCardPopup.querySelector('.popup__image-title').textContent = imageTarget.alt;
    showCardPopup.classList.add('popup_visible');
    showCardPopup.querySelector('.popup__close-button').addEventListener('click', closeCard);
}

function toggleLike(e) {
    const currentButton = e.target;
    currentButton.classList.toggle('like-button_active');
}

function removeCard(e) {
    const currentCard = e.target.closest('.card');
    currentCard.remove();
}

function createCard(elData) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = elData.link;
    cardImage.alt = elData.name;
    cardElement.querySelector('.card__title-text').innerText = elData.name;
    const cardLikeButton = cardElement.querySelector('.like-button');
    const removeButton = cardElement.querySelector('.remove-button');
    cardLikeButton.addEventListener('click', toggleLike);
    removeButton.addEventListener('click', removeCard);
    cardImage.addEventListener('click', showCard);
    return cardElement;
}

function createInitialCards(data) {
    const cardsList = document.querySelector('.cards__list');
    for (let i = 0; i < data.length; i += 1) {
        const card = createCard(data[i]);
        cardsList.append(card);
    }
}

createInitialCards(initialCards);
