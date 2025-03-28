import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {SessionItemComponent} from "../../components/session-item/index.js";
export class SessionPage {
    constructor(parent) {
        this.parent = parent;
        this.currentSemester = null; // Текущий выбранный семестр (null - все)
        this.semestersData = this.getSemestersData();
    }

    getSemestersData() {
        return {
            "semester1": [
                {
                    date: "2024-01-18",
                    discipline: "Математический анализ",
                    type: "Экзамен",
                    room: "600",
                    result: "Сдано (3)"
                },
                {
                    date: "2024-01-10",
                    discipline: "Начертательная геометрия",
                    type: "Экзамен",
                    room: "504",
                    result: "Сдано (4)"
                },
                {
                    date: "2024-01-15",
                    discipline: "Основы программирования",
                    type: "Экзамен",
                    room: "502",
                    result: "Сдано (4)"
                },
                {
                    date: "2023-11-12",
                    discipline: "Иностранный язык",
                    type: "Зачет",
                    room: "608",
                    result: "Сдано"
                },
                {
                    date: "2023-12-28",
                    discipline: "Аналитическая геометрия",
                    type: "Зачет",
                    room: "604",
                    result: "Сдано"
                }
            ],
            "semester2": [
                {
                    date: "2024-06-14",
                    discipline: "ПКШ",
                    type: "Экзамен",
                    room: "500",
                    result: "Сдано (5)"
                },
                {
                    date: "2024-06-17",
                    discipline: "История России",
                    type: "Экзамен",
                    room: "602",
                    result: "Сдано (5)"
                },
                {
                    date: "2024-06-20",
                    discipline: "Физика",
                    type: "Экзамен",
                    room: "602",
                    result: "Сдано (4)"
                },
                {
                    date: "2024-06-24",
                    discipline: "Интеграллы и дифференциальные уравнения",
                    type: "Экзамен",
                    room: "602",
                    result: "Сдано (4)"
                },
                {
                    date: "2024-05-27",
                    discipline: "Архитектура АСОИУ",
                    type: "Зачет",
                    room: "504",
                    result: "Сдано"
                },
                {
                    date: "2024-05-23",
                    discipline: "Физкультура",
                    type: "Зачет",
                    room: "СК",
                    result: "Сдано"
                },
                {
                    date: "2024-05-27",
                    discipline: "ЛАиФИП",
                    type: "Зачет",
                    room: "600",
                    result: "Сдано"
                },
                {
                    date: "2024-05-27",
                    discipline: "Инженерная графика",
                    type: "Зачет",
                    room: "500",
                    result: "Сдано"
                }
            ],
            "semester3": [
                {
                    date: "2025-01-13",
                    discipline: "ТВиМС",
                    type: "Экзамен",
                    room: "600",
                    result: "Сдано (4)"
                },
                {
                    date: "2025-01-16",
                    discipline: "Электротехника",
                    type: "Экзамен",
                    room: "502",
                    result: "Сдано (4)"
                },
                {
                    date: "2025-01-17",
                    discipline: "Физика",
                    type: "Экзамен",
                    room: "502",
                    result: "Сдано (3)"
                },
                {
                    date: "2025-01-24",
                    discipline: "Архитектура АСОИУ",
                    type: "Экзамен",
                    room: "609",
                    result: "Сдано (5)"
                },
                {
                    date: "2024-12-10",
                    discipline: "Правоведение",
                    type: "Зачет",
                    room: "600",
                    result: "Сдано"
                },
                {
                    date: "2024-12-13",
                    discipline: "Физкультура",
                    type: "Зачет",
                    room: "СК",
                    result: "Сдано"
                },
                {
                    date: "2024-12-24",
                    discipline: "Экология",
                    type: "Зачет",
                    room: "600",
                    result: "Сдано"
                },
                {
                    date: "2024-12-24",
                    discipline: "Модели данных",
                    type: "Зачет",
                    room: "Кафедра ИУ5",
                    result: "Сдано"
                }
            ]
        };
    }

    get pageRoot() {
        return document.getElementById('session-page');
    }

    getHTML() {
        return `
            <div id="session-page">
                <h2 class="my-4">Сессии</h2>
                <div class="mb-4" id="semester-filter"></div>
                <div id="session-stats" class="mb-4"></div>
                <div id="session-results"></div>
            </div>
        `;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    filterBySemester(semester) {
        this.currentSemester = semester;
        this.renderResults();
    }

    renderSemesterFilter() {
        const filterContainer = document.getElementById('semester-filter');
        filterContainer.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="semesterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    ${this.currentSemester ? `Семестр ${this.currentSemester.replace('semester', '')}` : 'Показать все'}
                </button>
                <ul class="dropdown-menu" aria-labelledby="semesterDropdown">
                    <li><a class="dropdown-item" href="#" data-semester="null">Показать все</a></li>
                    <li><a class="dropdown-item" href="#" data-semester="semester1">Семестр 1</a></li>
                    <li><a class="dropdown-item" href="#" data-semester="semester2">Семестр 2</a></li>
                    <li><a class="dropdown-item" href="#" data-semester="semester3">Семестр 3</a></li>
                </ul>
            </div>
        `;

        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const semester = e.target.dataset.semester === 'null' ? null : e.target.dataset.semester;
                this.filterBySemester(semester);
                document.getElementById('semesterDropdown').textContent = 
                    semester ? `Семестр ${semester.replace('semester', '')}` : 'Показать все';
            });
        });
    }

    renderPalindromeChecker() {
        const container = document.getElementById('palindrome-checker');
        container.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Проверка палиндрома</h5>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" id="palindrome-input" placeholder="Введите строку">
                        <button class="btn btn-primary" id="check-palindrome">Проверить</button>
                    </div>
                    <div id="palindrome-result"></div>
                </div>
            </div>
        `;

        document.getElementById('check-palindrome').addEventListener('click', () => {
            const input = document.getElementById('palindrome-input').value;
            const result = isPalindrome(input);
            document.getElementById('palindrome-result').innerHTML = `
                <div class="alert alert-${result ? 'success' : 'danger'}">
                    "${input}" - ${result ? 'палиндром' : 'не палиндром'}
                </div>
            `;
        });
    }

    renderStatistics() {
        const statsContainer = document.getElementById('session-stats');
        
        const stats = {
            exams: 0,
            tests: 0,
            passed: 0
        };

        let dataToShow = [];
        if (this.currentSemester) {
            dataToShow = this.semestersData[this.currentSemester];
        } else {
            Object.values(this.semestersData).forEach(semesterData => {
                dataToShow = [...dataToShow, ...semesterData];
            });
        }

        dataToShow.forEach(item => {
            if (item.type === "Экзамен") stats.exams++;
            if (item.type === "Зачет") stats.tests++;
            if (item.result.includes("Сдано")) stats.passed++;
        });

        statsContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Статистика сессий</h5>
                    <p class="mb-1">Экзаменов: ${stats.exams}</p>
                    <p class="mb-1">Зачетов: ${stats.tests}</p>
                    <p class="mb-0">Сдано: ${stats.passed} из ${stats.exams + stats.tests}</p>
                </div>
            </div>
        `;
    }

    renderResults() {
        const resultsContainer = document.getElementById('session-results');
        resultsContainer.innerHTML = '';
        
        let dataToShow = [];
        if (this.currentSemester) {
            dataToShow = this.semestersData[this.currentSemester];
        } else {
            Object.values(this.semestersData).forEach(semesterData => {
                dataToShow = [...dataToShow, ...semesterData];
            });
        }
        
        // Сортируем по дате
        dataToShow.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Добавляем заголовок
        if (this.currentSemester) {
            const semesterNumber = this.currentSemester.replace('semester', '');
            resultsContainer.insertAdjacentHTML('beforeend', `<h4 class="mt-3">Семестр ${semesterNumber}</h4>`);
        }
        
        // Рендерим результаты
        dataToShow.forEach(item => {
            const sessionItem = new SessionItemComponent(resultsContainer);
            sessionItem.render(item);
        });
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        this.renderSemesterFilter();
        this.renderStatistics();
        this.renderResults();
    }
}