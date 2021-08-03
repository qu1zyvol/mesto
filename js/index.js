import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./Popup.js";

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
const showCardPopup = document.querySelector('#show-card-popup');
const showCardPopupImage = showCardPopup.querySelector('.popup__image');
const showCardPopupTitle = showCardPopup.querySelector('.popup__image-title');

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

const handleCardClick = (name, link) => {
    showCardPopupImage.src = link;
    showCardPopupImage.alt = name;
    showCardPopupTitle.textContent = name;
    openPopup(showCardPopup);
}

const createCard = (cardData) => {
    const card = new Card(cardData, '#card', handleCardClick);
    return card.renderCard();
}

const addNewCard = (e) => {
    e.preventDefault();
    cardsList.prepend(createCard({
        name: nameInput.value,
        link: linkInput.value
    }));
    closePopup();
}

const openProfilePopup = () => {
    profileFormValidator.resetValidation();
    titleInput.value = titleText.textContent;
    subtitleInput.value = subtitleText.textContent;
    openPopup(profilePopup);
}

const openAddCardPopup = () => {
    addCardForm.reset();
    cardFormValidator.resetValidation();
    openPopup(addCardPopup);
}

const saveProfileData = (e) => {
    e.preventDefault();
    titleText.textContent = titleInput.value;
    subtitleText.textContent = subtitleInput.value;
    closePopup();
}

editProfileButton.addEventListener('click', openProfilePopup);
addCardButton.addEventListener('click', openAddCardPopup);

editProfileForm.addEventListener('submit', saveProfileData);
addCardForm.addEventListener('submit', addNewCard);

popups.forEach((popup) => {
    popup.querySelector('.popup__close-button').addEventListener('click', closePopup);
})

const createInitialCards = (data) => {
    data.forEach(cardData => {
        cardsList.append(createCard(cardData));
    });
}

createInitialCards(initialCards);

document.body.classList.remove('preload');
