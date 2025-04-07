export class DisciplineCardComponent {
    constructor(parent) {
        this.parent = parent;
    }
    
    getHTML(data) {
        return `
            <div class="col-md-12 mb-4 card-container" data-title="${data.title.toLowerCase()}">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.text}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Подробнее</button>
                            <button class="btn btn-danger delete-btn" data-id="${data.id}">Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners(data, listeners) {
        document.getElementById(`click-card-${data.id}`).addEventListener("click", listeners.details);
        document.querySelector(`[data-id="${data.id}"].delete-btn`).addEventListener("click", listeners.delete);
    }

    render(data, listeners) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
        this.addListeners(data, listeners);
    }
}