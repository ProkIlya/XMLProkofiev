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
            <div id="main-page" class="row">
                <div class="col-md-12">
                    <h2 class="my-4">Главное меню</h2>
                    <div class="row" id="cards-container"></div>
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

    render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);

        // Демонстрация работы функций
        console.log("Результат concatenate:", concatenate(['МГТУ', 'им.', 'Баумана'], ' '));
        
        const arr = [1, 2, 3, 4];
        moveElement(arr, 1, 3);
        console.log("Результат moveElement:", arr);
        
        console.log("Результат sumUnique:", sumUnique([1, 2, 2, 3, 4, 4, 5]));
        
        console.log("Результат isPalindrome:", isPalindrome("А роза упала на лапу Азора"));

        const data = this.getData();
        const container = document.getElementById('cards-container');
        data.forEach((item) => {
            const card = new DisciplineCardComponent(container);
            card.render(item, this.clickCard.bind(this));
        });

        // Цикл с условием (пока не наступит 12:00)
        let currentTime = new Date().getHours();
        while(currentTime < 12) {
            console.log("Еще не 12:00");
            currentTime = new Date().getHours();
        }
        console.log("Уже 12:00!");
    }
}