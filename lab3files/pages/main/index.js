import {DisciplineCardComponent} from "../../components/discipline-card/index.js";
import {SessionResultsPage} from "../session-results/index.js";
import {SessionPage} from "../session/index.js";
import { concatenate, moveElement, sumUnique, isPalindrome } from "../../utils/functions.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
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
        }
    }

    getHTML() {
        return `
            <div id="main-page" class="container">
                <!-- Заголовок -->
                <h1 class="text-center my-4">Учебный портал МГТУ им Н.Э. Баумана</h1>
                
                <!-- Карточки меню -->
                <div class="row mb-5" id="cards-container"></div>
                
                <!-- Демонстрация функций -->
                <div class="row">
                    <!-- Демо moveElement -->
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-primary text-white">
                                Демонстрация: moveElement()
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">Массив (через запятую):</label>
                                    <input type="text" class="form-control" id="array-input" value="1, 2, 3, 4">
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label class="form-label">From (индекс):</label>
                                        <input type="number" class="form-control" id="from-input" value="1" min="0">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label">To (индекс):</label>
                                        <input type="number" class="form-control" id="to-input" value="3" min="0">
                                    </div>
                                </div>
                                <button id="move-element-btn" class="btn btn-primary">Выполнить</button>
                                <div class="mt-3">
                                    <div id="move-element-result" class="alert alert-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Демо concatenate -->
                    <div class="col-md-6 mb-4">
                        <div class="card h-100">
                            <div class="card-header bg-primary text-white">
                                Демонастрация: concatenate()
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label class="form-label">Массив (через запятую):</label>
                                    <input type="text" class="form-control" id="concatenate-input" value="Я, учусь, на, лучшей, кафедре">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Разделитель:</label>
                                    <input type="text" class="form-control" id="delimiter-input" value=" ">
                                </div>
                                <button id="concatenate-btn" class="btn btn-primary">Объединить</button>
                                <div class="mt-3">
                                    <div id="concatenate-result" class="alert alert-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getData() {
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
            }
        ];
    }
    addMoveElementDemoListeners() {
        document.getElementById('move-element-btn').addEventListener('click', () => {
            try {
                const arrayInput = document.getElementById('array-input').value;
                const from = parseInt(document.getElementById('from-input').value);
                const to = parseInt(document.getElementById('to-input').value);
                
                // Преобразуем строку в массив
                const arr = arrayInput.split(',').map(item => item.trim()).filter(Boolean);
                
                // Проверка индексов
                if (from < 0 || to < 0 || from >= arr.length || to >= arr.length) {
                    throw new Error('Некорректные индексы!');
                }
                
                // Копируем массив, чтобы не менять исходный
                const arrCopy = [...arr];
                moveElement(arrCopy, from, to);
                
                // Выводим результат
                document.getElementById('move-element-result').innerHTML = `
                    Исходный массив: [${arr.join(', ')}]<br>
                    Новый порядок: [${arrCopy.join(', ')}]
                `;
            } catch (error) {
                document.getElementById('move-element-result').innerHTML = `
                    <span class="text-danger">Ошибка: ${error.message}</span>
                `;
            }
        });
    }
    addConcatenateDemoListeners() {
        document.getElementById('concatenate-btn').addEventListener('click', () => {
            try {
                const arrayStr = document.getElementById('concatenate-input').value;
                const delimiter = document.getElementById('delimiter-input').value;
                
                const arr = arrayStr.split(',').map(item => item.trim());
                const result = concatenate(arr, delimiter);
                
                document.getElementById('concatenate-result').innerHTML = `
                    <strong>Массив:</strong> [${arr.join(', ')}]<br>
                    <strong>Разделитель:</strong> "${delimiter}"<br>
                    <strong>Результат:</strong> "${result}"
                `;
            } catch (error) {
                document.getElementById('concatenate-result').textContent = `Ошибка: ${error.message}`;
            }
        });
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        // Рендер карточек меню
        const data = [
            {
                id: "session-results",
                title: "Результаты сессий",
                text: "Просмотр оценок по семестрам"
            },
            {
                id: "session",
                title: "Сессия",
                text: "Расписание и результаты"
            }
        ];

        const container = document.getElementById('cards-container');
        data.forEach((item) => {
            const card = new DisciplineCardComponent(container);
            card.render(item, this.clickCard.bind(this));
        });

        // Инициализация демо-функций
        this.addMoveElementDemoListeners();
        this.addConcatenateDemoListeners();
    }
}