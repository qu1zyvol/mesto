const img1 = new URL('../images/card/moscow.jpg', import.meta.url);
const img2 = new URL('../images/card/piter.jpg', import.meta.url);
const img3 = new URL('../images/card/karelia.jpg', import.meta.url);
const img4 = new URL('../images/card/komi.jpg', import.meta.url);
const img5 = new URL('../images/card/irkutsk.jpg', import.meta.url);
const img6 = new URL('../images/card/kazan.jpg', import.meta.url);


const initialCards = [
    {
        name: 'Москва',
        link: img1
    },
    {
        name: 'Питер',
        link: img2
    },
    {
        name: 'Карелия',
        link: img3
    },
    {
        name: 'Республика Коми',
        link: img4
    },
    {
        name: 'Иркутск',
        link: img5
    },
    {
        name: 'Казань',
        link: img6
    },
];

export default initialCards;
