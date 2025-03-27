export class SessionItemComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        const resultClass = data.result.includes("Сдано") ? "text-success" : "text-danger";
        
        return `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="card-title mb-1">${data.discipline}</h5>
                            <p class="card-text mb-1">
                                <span class="badge bg-${data.type === "Экзамен" ? "primary" : "secondary"}">
                                    ${data.type}
                                </span>
                            </p>
                            <p class="card-text mb-1"><small>Дата: ${data.date}</small></p>
                            <p class="card-text mb-0"><small>Аудитория: ${data.room}</small></p>
                        </div>
                        <div class="text-end">
                            <p class="card-text ${resultClass}"><strong>${data.result}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    render(data) {
        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);
    }
}