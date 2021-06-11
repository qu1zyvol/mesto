const likeButtons = document.querySelectorAll('.like-button')

function toggleLike(e) {
    const currentButton = e.target;
    currentButton.classList.toggle('like-button_active');
}

for (let i = 0; likeButtons.length > i; i += 1){
    likeButtons[i].addEventListener('click', toggleLike)
}
