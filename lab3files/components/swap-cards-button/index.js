export class SwapCardsButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <button class="btn btn-primary" id="swap-cards-btn">
                Поменять карточки местами
            </button>
        `;
    }

    addListeners(callback) {
        document.getElementById('swap-cards-btn').addEventListener('click', callback);
    }

    render(callback) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(callback);
    }
}