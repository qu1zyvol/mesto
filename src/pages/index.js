import './index.css';
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDeleteConfirm from "../components/PopupDeleteConfirm.js";

import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import { validatorProps } from "../utils/constants.js";

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-27",
    accessToken: "815301eb-e78e-456d-b945-5a0b4eb50195"
});

const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');
const editProfileForm = document.querySelector('.popup__edit-profile');
const editAvatarForm = document.querySelector('.popup__edit-avatar');
const editAvatarButton = document.querySelector('.profile__avatar');

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar-image', api);

/* Enable form validator */
const profileFormValidator = new FormValidator(validatorProps, '.popup__edit-profile');
const cardFormValidator = new FormValidator(validatorProps, '.popup__add-card');
const avatarFormValidator = new FormValidator(validatorProps, '.popup__edit-avatar');

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();
/* End enable form validator */

const cardPopup = new PopupWithImage('#show-card-popup');
const deleteConfirmPopup = new PopupDeleteConfirm('#delete-confirm');

const createCard = (cardData, api) => {
    const card = new Card(cardData, '#card', cardPopup.open, deleteConfirmPopup.open, api);
    return card.renderCard();
}

const openProfilePopup = () => {
    profileFormValidator.resetValidation();
    const data = userInfo.getUserInfo();
    // Передавать data в вызов попапа нельзя, данные будут каждый раз старые (он вызовется один раз при инициализации класса)
    editProfileForm.querySelectorAll('input').forEach(input => {
        input.value = data[input.name];
    });
}

const openAvatarPopup = () => {
    avatarFormValidator.resetValidation();
}

const profilePopup = new PopupWithForm('#profile-popup', openProfilePopup, userInfo.setUserInfo);
const avatarPopup = new PopupWithForm('#edit-avatar', openAvatarPopup, userInfo.setUserAvatar);

editProfileButton.addEventListener('click', profilePopup.open);
editAvatarButton.addEventListener('click', avatarPopup.open);

userInfo.fetchUserInfo().then(userId => {
    api.getCards().then(data => {
        if(typeof  data === 'object'){
            const cardsSection = new Section({ items: data, renderer: createCard}, '.cards__list', userId, api);
            const addCardPopup = new PopupWithForm('#add-card-popup', cardFormValidator.resetValidation, cardsSection.addItem);
            addCardButton.addEventListener('click', addCardPopup.open);
            cardsSection.renderAll();
        }
    }).catch(console.error);
}).catch(console.error);


document.body.classList.remove('preload');
