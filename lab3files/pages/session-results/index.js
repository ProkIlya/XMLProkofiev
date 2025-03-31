import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {SemesterItemComponent} from "../../components/semester-item/index.js";


export class SessionResultsPage {
    constructor(parent) {
        this.parent = parent;
        this.currentSemester = null;
        this.semestersData = this.getSemestersData();
        this.currentData = [];
        this.domElements = {}; // Для кэширования DOM-элементов
    }

    getSemestersData() {
        return {
            "semester1": [
                {
                    discipline: "Математический анализ",
                    grade: 3,
                    teacher: "Келдыш Е.П.",
                    date: "2024-01-18"
                },
                {
                    discipline: "Начертательная геометрия",
                    grade: 4,
                    teacher: "Корягина О.М.",
                    date: "2024-01-10"
                },
                {
                    discipline: "Основы программирования",
                    grade: 4,
                    teacher: "Семенов Д.В.",
                    date: "2024-01-15"
                }
            ],
            "semester2": [
                {
                    discipline: "ПКШ",
                    grade: 5,
                    teacher: "Аладин Д.В.",
                    date: "2024-06-14"
                },
                {
                    discipline: "История России",
                    grade: 5,
                    teacher: "Федоров К.В.",
                    date: "2024-06-17"
                },
                {
                    discipline: "Физика",
                    grade: 4,
                    teacher: "Герасимов Н.В.",
                    date: "2024-06-20"
                },
                {
                    discipline: "Интеграллы и дифференциальные уравнения",
                    grade: 4,
                    teacher: "Келдыш Е.П.",
                    date: "2024-06-24"
                }
            ],
            "semester3": [
                {
                    discipline: "ТВиМС",
                    grade: 4,
                    teacher: "Бирюков О.Н.",
                    date: "2025-01-13"
                },
                {
                    discipline: "Электротехника",
                    grade: 4,
                    teacher: "Белодедов М.В.",
                    date: "2025-01-16"
                },
                {
                    discipline: "Физика",
                    grade: 3,
                    teacher: "Герасимов Н.В.",
                    date: "2025-01-17"
                },
                {
                    discipline: "Архитектура АСОИУ",
                    grade: 5,
                    teacher: "Афанасьев Г.А.",
                    date: "2025-01-24"
                }
            ]
        };
    }

    get pageRoot() {
        return document.getElementById('session-results-page');
    }

    getHTML() {
        return `
            <div id="session-results-page">
                <h2 class="my-4">Результаты сессий</h2>
                <div class="mb-4" id="semester-filter"></div>
                <div id="session-controls"></div>
                <div id="semester-stats" class="mb-4"></div>
                <div id="semester-results"></div>
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

    calculateAverage(grades) {
        if (grades.length === 0) return 0;
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return (sum / grades.length).toFixed(2);
    }

    renderSemesterFilter() {
        const filterContainer = document.getElementById('semester-filter');
        filterContainer.innerHTML = `
            <div class="dropdown mb-4">
                <button class="btn btn-primary dropdown-toggle" type="button" 
                        id="semesterDropdown" data-bs-toggle="dropdown" 
                        aria-expanded="false">
                    ${this.currentSemester ? `Семестр ${this.currentSemester.replace('semester', '')}` : 'Все семестры'}
                </button>
                <ul class="dropdown-menu" aria-labelledby="semesterDropdown">
                    <li><a class="dropdown-item" href="#" data-semester="null">Все семестры</a></li>
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
                    semester ? `Семестр ${semester.replace('semester', '')}` : 'Все семестры';
            });
        });
    }

    renderStatistics() {
        const statsContainer = document.getElementById('semester-stats');
        
        const semesterStats = {};
        let allGrades = [];
        
        Object.keys(this.semestersData).forEach(semester => {
            const grades = this.semestersData[semester].map(item => item.grade);
            semesterStats[semester] = this.calculateAverage(grades);
            allGrades = [...allGrades, ...grades];
        });
        
        const overallAvg = this.calculateAverage(allGrades);
        
        statsContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Статистика успеваемости</h5>
                    <p class="mb-1">Семестр 1: ${semesterStats.semester1}</p>
                    <p class="mb-1">Семестр 2: ${semesterStats.semester2}</p>
                    <p class="mb-1">Семестр 3: ${semesterStats.semester3}</p>
                    <p class="mb-0 fw-bold">Общий средний балл: ${overallAvg}</p>
                </div>
            </div>
        `;
    }

    renderControls() {
        const controlsContainer = document.getElementById('session-controls');
        controlsContainer.innerHTML = `
            <div class="mb-3 d-flex gap-2">
                <button class="btn btn-danger" id="remove-card-btn">
                    Удалить последнюю карточку
                </button>
                <button class="btn btn-success" id="copy-card-btn">
                    Добавить копию первой карточки
                </button>
            </div>
        `;

        document.getElementById('remove-card-btn').addEventListener('click', () => {
            if (this.currentData.length === 0) return;
            
            const lastItem = this.currentData[this.currentData.length - 1];
            
            // Удаляем из исходных данных
            if (this.currentSemester) {
                const index = this.semestersData[this.currentSemester].findIndex(item => 
                    item.discipline === lastItem.discipline && item.date === lastItem.date
                );
                if (index !== -1) {
                    this.semestersData[this.currentSemester].splice(index, 1);
                }
            } else {
                Object.keys(this.semestersData).forEach(semester => {
                    const index = this.semestersData[semester].findIndex(item => 
                        item.discipline === lastItem.discipline && item.date === lastItem.date
                    );
                    if (index !== -1) {
                        this.semestersData[semester].splice(index, 1);
                    }
                });
            }
            
            this.renderResults();
            this.renderStatistics(); // Обновляем статистику
        });

        document.getElementById('copy-card-btn').addEventListener('click', () => {
            if (this.currentData.length === 0) return;
            
            const firstItem = {...this.currentData[0]};
            firstItem.date = new Date().toISOString().split('T')[0];
            
            // Добавляем в исходные данные
            if (this.currentSemester) {
                this.semestersData[this.currentSemester].push(firstItem);
            } else {
                this.semestersData.semester1.push(firstItem);
            }
            
            this.renderResults();
            this.renderStatistics(); // Обновляем статистику
        });
    }

    renderResults() {
        const resultsContainer = document.getElementById('semester-results');
        resultsContainer.innerHTML = '';
        
        // Обновляем currentData
        if (this.currentSemester) {
            this.currentData = [...this.semestersData[this.currentSemester]];
        } else {
            this.currentData = [];
            Object.values(this.semestersData).forEach(semesterData => {
                this.currentData.push(...semesterData);
            });
        }

        // Сортируем по дате
        this.currentData.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Рендерим
        this.currentData.forEach(item => {
            const semesterItem = new SemesterItemComponent(resultsContainer);
            semesterItem.render(item);
        });
    }

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));

        this.renderSemesterFilter();
        this.renderControls();
        this.renderStatistics();
        this.renderResults();
    }
}