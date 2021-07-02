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

function addNewCard(e) {
    e.preventDefault();
    const newCard = createCard({
        name: nameInput.value,
        link: linkInput.value
    });

    nameInput.value = '';
    linkInput.value = '';

    cardsList.prepend(newCard);
    closePopup('#add-card-popup');
}

function initPopup(id) {
    if (id === '#profile-popup') {
        titleInput.value = titleText.textContent;
        subtitleInput.value = subtitleText.textContent;
    }
}

function openPopup(id) {
    const popup = document.querySelector(id);
    popup.classList.add('popup_visible');
    popup.querySelector('.popup__close-button').addEventListener('click', () => closePopup(id));
    initPopup(id);
}

function closePopup(id) {
    const popup = document.querySelector(id);
    popup.classList.remove('popup_visible');
    popup.querySelector('.popup__close-button').removeEventListener('click', () => closePopup(id));
}

function saveProfileData(e) {
    e.preventDefault();
    titleText.textContent = titleInput.value;
    subtitleText.textContent = subtitleInput.value;
    closePopup('#profile-popup');
}

editProfileButton.addEventListener('click', (evt) => openPopup("#profile-popup", evt));
addCardButton.addEventListener('click', (evt) => openPopup("#add-card-popup", evt));
editProfileForm.addEventListener('submit', saveProfileData);
addCardForm.addEventListener('submit', addNewCard);


