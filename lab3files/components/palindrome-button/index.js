export class PalindromeButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `
            <button class="btn btn-primary" id="check-palindrome-btn">
                Поиск палиндрома
            </button>
        `;
    }

    addListeners(callback) {
        document.getElementById('check-palindrome-btn').addEventListener('click', callback);
    }

    render(callback) {
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(callback);
    }
}