import { DisciplineCardComponent } from "../../components/discipline-card/index.js";
import { ExamDetailsPage } from "../exam-details/index.js";
import { SwapCardsButtonComponent } from "../../components/swap-cards-button/index.js";
import { PalindromeButtonComponent } from "../../components/palindrome-button/index.js";
import { AddCardButtonComponent } from "../../components/add-card-button/index.js";
import { moveElement, isPalindrome } from "../../utils/functions.js";
import { examUrls } from "../../modules/examUrls.js";
import { ajax } from "../../modules/ajax.js";
import { AddEditExamPage } from "../add-edit-exam/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.examsData = [];
    }

    get pageRoot() {
        return document.getElementById('main-page');
    }

    loadExams(search = '') {
        const url = search ? examUrls.searchExams(search) : examUrls.getExams();
        ajax.get(url, (data, status) => {
          if (status === 'success' && data) {
            this.examsData = data;
            this.renderCards();
          } else {
            console.error('Ошибка загрузки данных:', status);
            this.examsData = []; // Запасной вариант
            this.renderCards(); // Отрисовать пустой список
          }
        });
      }

    showDetails(e) {
        const cardId = parseInt(e.target.dataset.id);
        const examData = this.examsData.find(item => item.id === cardId);
        
        if(examData) {
            const examDetailsPage = new ExamDetailsPage(this.parent);
            examDetailsPage.render(examData);
        }
    }

    handleEditCard(e) {
        const cardId = parseInt(e.target.dataset.id);
        const examData = this.examsData.find(item => item.id === cardId);
        
        if(examData) {
            const editPage = new AddEditExamPage(this.parent, examData);
            editPage.render();
        }
    }

    handleDeleteCard(e) {
        const cardId = parseInt(e.target.dataset.id);
        if (confirm('Вы уверены, что хотите удалить эту карточку?')) {
            ajax.delete(examUrls.removeExamById(cardId), () => {
                this.loadExams();
            });
        }
    }

    handleAddCard() {
        const addPage = new AddEditExamPage(this.parent);
        addPage.render();
    }

    handleSwapCards() {
        if (this.examsData.length < 2) return;
        moveElement(this.examsData, 0, this.examsData.length - 1);
        this.renderCards();
    }

    handlePalindromeCheck() {
        const palindromes = this.examsData
            .filter(exam => isPalindrome(exam.discipline.toLowerCase().replace(/\s+/g, '')))
            .map(exam => exam.discipline);
        
        if (palindromes.length > 0) {
            alert(`Найдены палиндромы:\n${palindromes.join('\n')}`);
        } else {
            alert('Палиндромы не найдены');
        }
    }

    renderCards() {
        const container = document.getElementById('cards-container');
        container.innerHTML = '';
        
        this.examsData.forEach((item) => {
            const card = new DisciplineCardComponent(container);
            card.render(item, {
                details: (e) => this.showDetails(e),
                edit: (e) => this.handleEditCard(e),
                delete: (e) => this.handleDeleteCard(e)
            });
        });
    }

    render() {
        this.parent.innerHTML = `
            <div id="main-page" class="container">
                <h1 class="text-center my-4">Учебный портал МГТУ им Н.Э. Баумана</h1>
                <div class="mb-4">
                    <input type="text" class="form-control" id="search-input" placeholder="Поиск по названию...">
                </div>
                <div id="buttons-container" class="mb-4 d-flex flex-wrap gap-2"></div>
                <div id="cards-container" class="row"></div>
            </div>
        `;

        const buttonsContainer = document.getElementById('buttons-container');
        
        // Добавляем все кнопки как было в lab3
        const swapButton = new SwapCardsButtonComponent(buttonsContainer);
        swapButton.render(this.handleSwapCards.bind(this));

        const palindromeButton = new PalindromeButtonComponent(buttonsContainer);
        palindromeButton.render(this.handlePalindromeCheck.bind(this));

        const addButton = new AddCardButtonComponent(buttonsContainer);
        addButton.render(this.handleAddCard.bind(this));

        // Настройка поиска
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.loadExams(e.target.value);
        });

        // Первоначальная загрузка данных
        this.loadExams();
    }
}