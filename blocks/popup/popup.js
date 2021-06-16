const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close-button');
const saveButton = popup.querySelector('.popup__save-button');

const formElement = popup.querySelector('.popup__form');

const titleInput = popup.querySelector('.popup__input_type_title');
const subtitleInput = popup.querySelector('.popup__input_type_subtitle');

const titleText = document.querySelector('.profile__title');
const subtitleText = document.querySelector('.profile__subtitle');

function keyAction(e) {
    if (e.keyCode === 13) saveData();
}

function openPopup() {
    titleInput.value = titleText.textContent;
    subtitleInput.value = subtitleText.textContent;
    popup.classList.add('popup_visible');
    document.addEventListener('keydown', keyAction);
}

function closePopup() {
    popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', keyAction);
}

function saveData(e) {
    e.preventDefault();
    titleText.textContent = titleInput.value;
    subtitleText.textContent = subtitleInput.value;
    closePopup();
}


editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', saveData);


