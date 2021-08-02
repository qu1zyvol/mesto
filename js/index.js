import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const editProfileForm = document.querySelector('.popup__edit-profile');
const titleInput = editProfileForm.querySelector('.popup__input_type_title');
const subtitleInput = editProfileForm.querySelector('.popup__input_type_subtitle');

const addCardForm = document.querySelector('.popup__add-card');
const nameInput = addCardForm.querySelector('.popup__input_type_name');
const linkInput = addCardForm.querySelector('.popup__input_type_link');

const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');

const cardsList = document.querySelector('.cards__list');

const popups = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('#profile-popup');
const addCardPopup = document.querySelector('#add-card-popup');

const keyAction = (e) => {
    if (e.key === 'Escape') closePopup();
}

const closeOnClickAway = (e) => {
    const popup = e.target;
    if (popup.classList.contains('popup_visible')) {
        closePopup();
    }
}

const addNewCard = (e) => {
    e.preventDefault();
    const newCard = new Card({
        name: nameInput.value,
        link: linkInput.value
    }, '#card');
    cardsList.prepend(newCard.renderCard());
    closePopup();
}

const openProfilePopup = () => {
    titleInput.value = titleText.textContent;
    subtitleInput.value = subtitleText.textContent;
    openPopup(profilePopup);
}

const openPopup = (popup) => {
    popup.querySelector('form')?.resetValidation();
    popup.classList.add('popup_visible');
    document.addEventListener('keydown', keyAction);
    popup.addEventListener('mousedown', closeOnClickAway);
}

const closePopup = () => {
    const popup = document.querySelector('.popup_visible');
    popup.querySelector('form')?.reset();
    popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', keyAction);
    popup.removeEventListener('mousedown', closeOnClickAway);
}

const saveProfileData = (e) => {
    e.preventDefault();
    titleText.textContent = titleInput.value;
    subtitleText.textContent = subtitleInput.value;
    closePopup();
}

editProfileButton.addEventListener('click', openProfilePopup);
addCardButton.addEventListener('click', () => openPopup(addCardPopup));
editProfileForm.addEventListener('submit', saveProfileData);
addCardForm.addEventListener('submit', addNewCard);

popups.forEach((popup) => {
    popup.querySelector('.popup__close-button').addEventListener('click', closePopup);
})

/* Enable form validator */
const validatorProps = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const profileFormValidator = new FormValidator(validatorProps, '.popup__edit-profile');
const cardFormValidator = new FormValidator(validatorProps, '.popup__add-card');

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
/* End enable form validator */

const createInitialCards = (data) => {
    const cardsList = document.querySelector('.cards__list');
    data.forEach(cardData => {
        const card = new Card(cardData, '#card');
        cardsList.append(card.renderCard());
    });
}

createInitialCards(initialCards);
