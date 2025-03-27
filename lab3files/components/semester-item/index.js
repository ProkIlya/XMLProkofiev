export class SemesterItemComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5 class="card-title mb-1">${data.discipline}</h5>
                            <p class="card-text mb-1"><small>Преподаватель: ${data.teacher}</small></p>
                            <p class="card-text mb-0"><small>Дата: ${data.date}</small></p>
                        </div>
                        <div class="text-end">
                            <span class="badge bg-${data.grade >= 4 ? 'success' : 'warning'} fs-6">${data.grade}</span>
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