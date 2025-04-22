import { BackButtonComponent } from "../../components/back-button/index.js";
import { MainPage } from "../main/index.js";
import { examUrls } from "../../modules/examUrls.js";
import { ajax } from "../../modules/ajax.js";

export class AddEditExamPage {
  constructor(parent, examData = null) {
    this.parent = parent;
    this.examData = examData;
    this.isEditMode = !!examData;
  }

  getHTML() {
    return `
      <div id="add-edit-page" class="container">
        <h2>${this.isEditMode ? 'Редактирование' : 'Добавление'} карточки</h2>
        <form id="exam-form">
          <div class="mb-3">
            <label>Название дисциплины</label>
            <input type="text" id="discipline" class="form-control" 
                   value="${this.examData?.discipline || ''}" required>
          </div>
          <div class="mb-3">
            <label>Кафедра</label>
            <input type="text" id="department" class="form-control" 
                   value="${this.examData?.department || ''}" required>
          </div>
          <div class="mb-3">
            <label>Ссылка на изображение</label>
            <input type="text" id="imageUrl" class="form-control" 
                   value="${this.examData?.imageUrl || ''}" required>
          </div>
          <div class="mb-3">
            <label>Дата экзамена</label>
            <input type="date" id="date" class="form-control" 
                   value="${this.examData?.date || ''}" required>
          </div>
          <button type="submit" class="btn btn-primary">
            ${this.isEditMode ? 'Сохранить' : 'Добавить'}
          </button>
        </form>
      </div>
    `;
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    const formData = {
        discipline: document.getElementById('discipline').value,
        department: document.getElementById('department').value,
        imageUrl: document.getElementById('imageUrl').value,
        date: document.getElementById('date').value,
        groupGrades: this.examData?.groupGrades || [3, 3, 3, 3, 3]
    };

    try {
        if (this.isEditMode) {
            await ajax.patch(examUrls.updateExamById(this.examData.id), formData);
        } else {
            await ajax.post(examUrls.createExam(), formData);
        }
        this.returnToMain();
    } catch (error) {
        console.error('Ошибка при сохранении:', error);
        alert('Произошла ошибка при сохранении данных');
    }
  }

  returnToMain() {
    const mainPage = new MainPage(this.parent);
    mainPage.render();
  }

  render() {
    this.parent.innerHTML = this.getHTML();
    new BackButtonComponent(this.parent.querySelector('#add-edit-page'))
      .render(this.returnToMain.bind(this));
    document.getElementById('exam-form')
      .addEventListener('submit', this.handleSubmit.bind(this));
  }
}