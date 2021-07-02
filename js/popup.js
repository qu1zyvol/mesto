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

function addNewCard(e) {
    e.preventDefault();
    const newCard = createCard({
        name: nameInput.value,
        link: linkInput.value
    });
    cardsList.prepend(newCard);
    addCardForm.reset();
    closePopup(addCardPopup);
}

function openProfilePopup(){
    titleInput.value = titleText.textContent;
    subtitleInput.value = subtitleText.textContent;
    openPopup(profilePopup);
}

function openPopup(popup) {
    popup.classList.add('popup_visible');
}

function closePopup(popup) {
    popup.classList.remove('popup_visible');
}

function saveProfileData(e) {
    e.preventDefault();
    titleText.textContent = titleInput.value;
    subtitleText.textContent = subtitleInput.value;
    closePopup(profilePopup);
}

editProfileButton.addEventListener('click', openProfilePopup);
addCardButton.addEventListener('click', () => openPopup(addCardPopup));
editProfileForm.addEventListener('submit', saveProfileData);
addCardForm.addEventListener('submit', addNewCard);

popups.forEach((popup) => {
    popup.querySelector('.popup__close-button').addEventListener('click', () => closePopup(popup));
})



