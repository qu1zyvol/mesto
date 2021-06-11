const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close-button');
const saveButton = popup.querySelector('.popup__save-button');

const formElement = popup.querySelector('.popup__form');

const titleInput = popup.querySelector('.popup__input_type_title');
const subtitleInput = popup.querySelector('.popup__input_type_subtitle');

const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');
const body = document.querySelector('body');

function checkSaveButtonStatus() {
    if (titleInput.value.length > 0 && subtitleInput.value.length > 0) {
        saveButton.removeAttribute('disabled');
    } else {
        saveButton.setAttribute('disabled', 'disabled');
    }
}

function keyAction(e) {
    if (e.keyCode === 27) closePopup();
    if (e.keyCode === 13) saveData();
}



function openPopup() {
    titleInput.value = titleText.textContent;
    subtitleInput.value = subtitleText.textContent;
    popup.classList.add('popup_visible');
    body.style.overflow = 'hidden';
    document.addEventListener('keydown', keyAction);
    popup.addEventListener('click', closeOnClickAway, false);
    checkSaveButtonStatus();
}

function closePopup() {
    popup.classList.remove('popup_visible');
    body.style.overflow = 'auto';
    document.removeEventListener('keydown', keyAction);
    popup.removeEventListener('click', closeOnClickAway, false);
}

function closeOnClickAway(e) {
    if (e.target.classList.contains('popup_visible')) {
        closePopup();
    }
}

function saveData(e) {
    if (e) e.preventDefault();
    titleText.textContent = titleInput.value;
    subtitleText.textContent = subtitleInput.value;
    closePopup();
}

titleInput.addEventListener('input', checkSaveButtonStatus);
subtitleInput.addEventListener('input', checkSaveButtonStatus);
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', saveData);


