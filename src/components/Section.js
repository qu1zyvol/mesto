class Section {
    constructor({ items, renderer }, containerSelector, userId, api) {
        this.items = items;
        this.renderer = renderer;
        this.parent = document.querySelector(containerSelector);
        this.addItem = this.addItem.bind(this);
        this.renderAll = this.renderAll.bind(this);
        this._userId = userId;
        this._api = api;
    }

    addItem(newCardData) {
        return this._api.createCard(newCardData).then(cardData => {
            cardData.userId = this._userId;
            this.parent.prepend(this.renderer(cardData, this._api));
        });
    }

    renderAll(){
        this.items.forEach(cardData => {
            cardData.userId = this._userId;
            this.parent.append(this.renderer(cardData, this._api));
        });
    }

}

export default Section;
