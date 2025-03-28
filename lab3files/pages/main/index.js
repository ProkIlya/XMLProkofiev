import {DisciplineCardComponent} from "../../components/discipline-card/index.js";
import {SessionResultsPage} from "../session-results/index.js";
import {SessionPage} from "../session/index.js";
import {FunctionsDemoPage} from "../functions-demo/index.js";

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
        } else if(cardId === "functions-demo") {
            const functionsDemoPage = new FunctionsDemoPage(this.parent);
            functionsDemoPage.render();
        }
    }

    getHTML() {
        return `
            <div id="main-page" class="container">
                <h1 class="text-center my-4">Учебный портал МГТУ им Н.Э. Баумана</h1>
                <div class="row mb-5" id="cards-container"></div>
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

        const data = this.getData();
        const container = document.getElementById('cards-container');
        data.forEach((item) => {
            const card = new DisciplineCardComponent(container);
            card.render(item, this.clickCard.bind(this));
        });
    }
}