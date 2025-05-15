class ExamUrls {
    constructor() {
      this.baseUrl = 'http://localhost:3001';
    }
    getExams() {
      return `${this.baseUrl}/exams`;
    }
    getExamById(id) {
      return `${this.baseUrl}/exams/${id}`;
    }
    createExam() {
      return `${this.baseUrl}/exams`;
    }
    removeExamById(id) {
      return `${this.baseUrl}/exams/${id}`;
    }
    updateExamById(id) {
      return `${this.baseUrl}/exams/${id}`;
    }
    searchExams(query) {
      return `${this.baseUrl}/exams?search=${encodeURIComponent(query)}`;
    }
  }
  export const examUrls = new ExamUrls();