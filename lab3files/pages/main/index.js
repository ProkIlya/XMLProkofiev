import {DisciplineCardComponent} from "../../components/discipline-card/index.js";
import {SessionResultsPage} from "../session-results/index.js";
import {SessionPage} from "../session/index.js";
import {FunctionsDemoPage} from "../functions-demo/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.cardsData = this.getInitialData(); 
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    clickCard(e) {
        const cardId = e.target.dataset.id;
        
        if(cardId === "session-results") {
            const sessionResultsPage = new SessionResultsPage(this.parent);
            sessionResultsPage.render();
        } else if(cardId === "session") {
            const sessionPage = new SessionPage(this.parent);
            sessionPage.render();
        } else if(cardId === "functions-demo") {
            const functionsDemoPage = new FunctionsDemoPage(this.parent);
            functionsDemoPage.render();
        }
    }

    getHTML() {
        return `
            <div id="main-page" class="container">
                <h1 class="text-center my-4">Учебный портал МГТУ им Н.Э. Баумана</h1>
                <div class="mb-4">
                    <input type="text" class="form-control" id="search-input" placeholder="Поиск по названию...">
                </div>
                <div class="mb-4">
                    <button class="btn btn-success" id="add-card-btn">Добавить карточку</button>
                </div>
                <div id="cards-container"></div>
            </div>
        `;
    }

    setupSearch() {
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            document.querySelectorAll('.card-container').forEach(card => {
                const title = card.dataset.title;
                card.style.display = title.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }

    setupAddCardButton() {
        document.getElementById('add-card-btn').addEventListener('click', () => {
            const firstCard = this.getData()[0];
            if(firstCard) {
                const newCard = {
                    ...firstCard,
                    id: Date.now().toString(),
                    title: `${firstCard.title} (копия)`
                };
                this.getData().push(newCard);
                this.renderCards();
            }
        });
    }

    handleDeleteCard(dataId) {
        const index = this.cardsData.findIndex(item => item.id === dataId);
        if (index !== -1) {
            this.cardsData.splice(index, 1);
            this.renderCards(); // Перерисовываем карточки после удаления
        }
    }

    setupAddCardButton() {
        document.getElementById('add-card-btn').addEventListener('click', () => {
            if (this.cardsData.length === 0) return;
            
            const firstCard = this.cardsData[0];
            const newCard = {
                ...firstCard,
                id: `copy-${Date.now()}`, // Уникальный ID
                title: `${firstCard.title} (копия)`
            };
            
            this.cardsData.push(newCard);
            this.renderCards(); // Перерисовываем карточки после добавления
        });
    }

    renderCards() {
        const container = document.getElementById('cards-container');
        container.innerHTML = '';
        
        this.cardsData.forEach((item) => {
            const card = new DisciplineCardComponent(container);
            card.render(item, {
                details: this.clickCard.bind(this),
                delete: (e) => this.handleDeleteCard(e.target.dataset.id)
            });
        });
    }

    getInitialData() {
        return [
            {
                id: "session-results",
                title: "Результаты сессий",
                text: "Просмотр оценок по семестрам"
            },
            {
                id: "session",
                title: "Сессии",
                text: "Расписание и результаты сессий"
            },
            {
                id: "functions-demo",
                title: "Демонстрация функций",
                text: "Примеры работы функций"
            }
        ];
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        this.renderCards();
        this.setupSearch();
        this.setupAddCardButton();
    }
}