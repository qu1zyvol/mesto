class Section {
    constructor({ items, renderer }, parentSelector) {
        this.items = items;
        this.renderer = renderer;
        this.parent = document.querySelector(parentSelector);
        this.addItem = this.addItem.bind(this);
        this.renderAll = this.renderAll.bind(this);
    }

    addItem({ name, link }) {
        this.parent.prepend(this.renderer({
            name,
            link
        }));
    }

    renderAll(){
        this.items.forEach(cardData => {
            this.parent.append(this.renderer(cardData));
        });
    }

}

export default Section;
