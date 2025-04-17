import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";
import { concatenate } from "../../utils/functions.js";

export class ExamDetailsPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('exam-details-page');
    }

    getHTML(examData) {
        const groups = ["ИУ5-41Б", "ИУ5-42Б", "ИУ5-43Б", "ИУ5-44Б", "РТ5-41Б"];
        const gradesInfo = concatenate(
            examData.groupGrades.map((grade, i) => `${groups[i]}: ${grade}`),
            ", "
        );

        return `
            <div id="exam-details-page" class="container">
                <div class="card mb-4">
                    <img src="${examData.imageUrl}" class="card-img-top" alt="${examData.discipline}" style="max-height: 500px; object-fit: cover;">
                    <div class="card-body">
                        <h2 class="card-title">${examData.discipline}</h2>
                        <p class="card-text">Кафедра: ${examData.department}</p>
                        <p class="card-text">Дата первого экзамена: ${examData.date}</p>
                        <p class="card-text">Средние оценки по группам: ${gradesInfo}</p>
                    </div>
                </div>
            </div>
        `;
    }

    clickBack() {
        const mainPage = new MainPage(this.parent);
        mainPage.render();
    }

    render(examData) {
        this.parent.innerHTML = '';
        const html = this.getHTML(examData);
        this.parent.insertAdjacentHTML('beforeend', html);

        const backButton = new BackButtonComponent(this.pageRoot);
        backButton.render(this.clickBack.bind(this));
    }
}