import {DisciplineCardComponent} from "../../components/discipline-card/index.js";
import {ExamDetailsPage} from "../exam-details/index.js";
import {SwapCardsButtonComponent} from "../../components/swap-cards-button/index.js";
import {PalindromeButtonComponent} from "../../components/palindrome-button/index.js";
import {AddCardButtonComponent} from "../../components/add-card-button/index.js";
import { moveElement, isPalindrome } from "../../utils/functions.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.examsData = this.getInitialData();
        this.nextId = 4; // Счетчик для новых карточек
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    clickCard(e) {
        const cardId = parseInt(e.target.dataset.id);
        const examData = this.examsData.find(item => item.id === cardId);
        
        if(examData) {
            const examDetailsPage = new ExamDetailsPage(this.parent);
            examDetailsPage.render(examData);
        }
    }

    getHTML() {
        return `
            <div id="main-page" class="container">
                <h1 class="text-center my-4">Учебный портал МГТУ им Н.Э. Баумана</h1>
                <div class="mb-4">
                    <input type="text" class="form-control" id="search-input" placeholder="Поиск по названию...">
                </div>
                <div id="buttons-container" class="mb-4 d-flex flex-wrap gap-2"></div>
                <div id="cards-container" class="d-flex flex-column gap-3"></div>
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

    handleDeleteCard(dataId) {
        const index = this.examsData.findIndex(item => item.id === dataId);
        if (index !== -1) {
            this.examsData.splice(index, 1);
            this.renderCards();
        }
    }

    handleAddCard() {
        if (this.examsData.length === 0) return;
        
        const firstCard = {...this.examsData[0]};
        const newCard = {
            ...firstCard,
            id: this.nextId++,
            discipline: `${firstCard.discipline} (копия)`,
            groupGrades: [...firstCard.groupGrades]
        };
        
        this.examsData.push(newCard);
        this.renderCards();
    }

    renderCards() {
        const container = document.getElementById('cards-container');
        container.innerHTML = '';
        
        this.examsData.forEach((item) => {
            const card = new DisciplineCardComponent(container);
            card.render(item, {
                details: this.clickCard.bind(this),
                delete: (e) => this.handleDeleteCard(parseInt(e.target.dataset.id))
            });
        });
    }

    getInitialData() {
        return [
            {
                id: 1,
                discipline: "Математический анализ",
                department: "ФН12",
                imageUrl: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_66d08cc67c699b45844c1de0_66d09d6c6b3e0d4d2c7432a0/scale_1200",
                date: "2024-01-18",
                groupGrades: [4, 3, 5, 4, 3]
            },
            {
                id: 2,
                discipline: "Физика",
                department: "ФН2",
                imageUrl: "https://frankfurt.apollo.olxcdn.com/v1/files/1o2ra070v5jx2-UZ/image;s=1000x562",
                date: "2024-06-20",
                groupGrades: [3, 4, 4, 3, 4]
            },
            {
                id: 3,
                discipline: "Основы программирования",
                department: "ИУ5",
                imageUrl: "https://repository-images.githubusercontent.com/605775853/fea1845d-8cc0-4902-8d3f-07dd860581a7",
                date: "2024-01-15",
                groupGrades: [5, 4, 5, 5, 4]
            }
        ];
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        // Рендерим кнопки через компоненты
        const buttonsContainer = document.getElementById('buttons-container');
        
        const swapButton = new SwapCardsButtonComponent(buttonsContainer);
        swapButton.render(() => {
            if (this.examsData.length < 2) return;
            moveElement(this.examsData, 0, this.examsData.length - 1);
            this.renderCards();
        });

        const palindromeButton = new PalindromeButtonComponent(buttonsContainer);
        palindromeButton.render(() => {
            const palindromes = this.examsData
                .filter(exam => isPalindrome(exam.discipline.toLowerCase().replace(/\s+/g, '')))
                .map(exam => exam.discipline);
            
            if (palindromes.length > 0) {
                alert(`Найдены палиндромы:\n${palindromes.join('\n')}`);
            } else {
                alert('Палиндромы не найдены');
            }
        });

        const addButton = new AddCardButtonComponent(buttonsContainer);
        addButton.render(this.handleAddCard.bind(this));

        this.renderCards();
        this.setupSearch();
    }
}