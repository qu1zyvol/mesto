const keyAction = (e) => {
    if (e.key === 'Escape') closePopup();
}

const closeOnClickAway = (e) => {
    const popup = e.target;
    if (popup.classList.contains('popup_visible')) {
        closePopup();
    }
}

export const openPopup = (popup) => {
    popup.classList.add('popup_visible');
    document.addEventListener('keydown', keyAction);
    popup.addEventListener('mousedown', closeOnClickAway);
}

export const closePopup = () => {
    const popup = document.querySelector('.popup_visible');
    popup.querySelector('form')?.reset();
    popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', keyAction);
    popup.removeEventListener('mousedown', closeOnClickAway);
}
