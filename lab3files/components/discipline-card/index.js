export class DisciplineCardComponent {
    constructor(parent) {
        this.parent = parent;
    }
    
    getHTML(data) {
        return `
            <div class="card-container mb-4" data-title="${data.discipline.toLowerCase()}">
                <div class="card" style="width: 24rem;">
                    <img src="${data.imageUrl}" class="card-img-top" 
                         style="height: 200px; object-fit: cover; width: 100%;"
                         alt="${data.discipline}">
                    <div class="card-body">
                        <h5 class="card-title">${data.discipline}</h5>
                        <p class="card-text">Кафедра: ${data.department}</p>
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">
                                Подробнее
                            </button>
                            <button class="btn btn-danger delete-btn" data-id="${data.id}">
                                Удалить
                            </button>
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