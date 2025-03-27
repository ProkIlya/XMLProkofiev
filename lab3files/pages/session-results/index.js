import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import {SemesterItemComponent} from "../../components/semester-item/index.js";
import { sumUnique } from "../../utils/functions.js";

export class SessionResultsPage {
    constructor(parent) {
        this.parent = parent;
        this.currentSemester = null; // Текущий выбранный семестр (null - все)
        this.semestersData = this.getSemestersData();
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
            <div class="btn-group w-100">
                <button class="btn btn-outline-primary" id="semester-all">Показать все</button>
                <button class="btn btn-outline-primary" id="semester-1">Семестр 1</button>
                <button class="btn btn-outline-primary" id="semester-2">Семестр 2</button>
                <button class="btn btn-outline-primary" id="semester-3">Семестр 3</button>
            </div>
        `;

        document.getElementById('semester-all').addEventListener('click', () => this.filterBySemester(null));
        document.getElementById('semester-1').addEventListener('click', () => this.filterBySemester('semester1'));
        document.getElementById('semester-2').addEventListener('click', () => this.filterBySemester('semester2'));
        document.getElementById('semester-3').addEventListener('click', () => this.filterBySemester('semester3'));
    }

    renderStatistics() {
        const statsContainer = document.getElementById('semester-stats');
        
        // Рассчитываем статистику для каждого семестра
        const semesterStats = {};
        let allGrades = [];
        
        Object.keys(this.semestersData).forEach(semester => {
            const grades = this.semestersData[semester].map(item => item.grade);
            semesterStats[semester] = this.calculateAverage(grades);
            allGrades = [...allGrades, ...grades];
        });
        
        // Общий средний балл
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

    renderResults() {
        const resultsContainer = document.getElementById('semester-results');
        resultsContainer.innerHTML = '';
        
        let dataToShow = [];
        if (this.currentSemester) {
            dataToShow = this.semestersData[this.currentSemester];
        } else {
            // Показываем все данные, объединяя семестры
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
        this.renderStatistics();
        this.renderResults();
    }
}