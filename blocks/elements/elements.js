const elementsList = document.querySelector('.elements__list');

function getRemoteData() {
    return [
        {
            id: 1,
            name: 'Москва',
            image: 'images/element/moscow.jpg'
        },
        {
            id: 2,
            name: 'Питер',
            image: 'images/element/piter.jpg'
        },
        {
            id: 3,
            name: 'Карелия',
            image: 'images/element/karelia.jpg'
        },
        {
            id: 4,
            name: 'Республика Коми',
            image: 'images/element/komi.jpg'
        },
        {
            id: 5,
            name: 'Иркутск',
            image: 'images/element/irkutsk.jpg'
        },
        {
            id: 6,
            name: 'Казань',
            image: 'images/element/kazan.jpg'
        },
    ];
}

const listData = getRemoteData();
const currentLikes = localStorage.getItem('currentLikes');
const currentLikesArray = (currentLikes) ? currentLikes.split(',') : [];

function toggleLike(e) {
    const currentButton = e.target;
    const currentLikes = localStorage.getItem('currentLikes');
    let currentLikesArray = (currentLikes) ? currentLikes.split(',') : [];

    const elId = currentButton.getAttribute('data-id');
    if (currentButton.classList.contains('like-button_active')) {
        console.log('We has');
        const likePosition = currentLikesArray.indexOf(elId);
        if (likePosition !== -1) currentLikesArray.splice(likePosition, 1);
    } else {
        currentLikesArray.push(elId);
    }

    localStorage.setItem('currentLikes', currentLikesArray.join(','));
    currentButton.classList.toggle('like-button_active');
}

function createElement(elData) {

    const elImage = document.createElement('img');
    elImage.classList.add('element__image');
    elImage.src = elData.image;
    elImage.alt = elData.name;

    const elTitle = document.createElement('div');
    elTitle.classList.add('element__title');

    const elTitleText = document.createElement('h2');
    elTitleText.classList.add('element__title-text');
    elTitleText.innerText = elData.name;

    const elLikeButton = document.createElement('button');
    elLikeButton.classList.add('like-button');

    elLikeButton.setAttribute('data-id', elData.id);
    elLikeButton.addEventListener('click', toggleLike);
    if (currentLikesArray.map(el => Number(el)).includes(elData.id)) {
        elLikeButton.classList.add('like-button_active');
    }

    elTitle.append(elTitleText, elLikeButton);

    const el = document.createElement('li');
    el.classList.add('element');


    el.append(elImage, elTitle);
    return el;
}


function createElements(data) {
    for (let i = 0; i < data.length; i += 1) {
        const element = createElement(data[i]);
        element.classList.add('element')
        elementsList.append(element);
    }
}


createElements(listData);
