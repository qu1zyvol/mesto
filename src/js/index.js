import '../pages/index.css';
import Card from "./Card.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import initialCards from "./initialCards.js";

const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const editProfileForm = document.querySelector('.popup__edit-profile');

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

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

const cardPopup = new PopupWithImage('#show-card-popup');

const createCard = (cardData) => {
    const card = new Card(cardData, '#card', cardPopup.open);
    return card.renderCard();
}

const cardsSection = new Section({ items: initialCards, renderer: createCard }, '.cards__list');
cardsSection.renderAll();

const openProfilePopup = () => {
    profileFormValidator.resetValidation();
    const data = userInfo.getUserInfo();
    editProfileForm.querySelectorAll('input').forEach(input => {
        input.value = data[input.name];
    });
}

const profilePopup = new PopupWithForm('#profile-popup', openProfilePopup, userInfo.setUserInfo);
const addCardPopup = new PopupWithForm('#add-card-popup', cardFormValidator.resetValidation, cardsSection.addItem);

editProfileButton.addEventListener('click', profilePopup.open);
addCardButton.addEventListener('click', addCardPopup.open);

document.body.classList.remove('preload');
