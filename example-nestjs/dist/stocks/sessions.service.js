"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsService = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("./file.service");
let SessionsService = class SessionsService {
    fileService;
    constructor(fileService) {
        this.fileService = fileService;
    }
    getNextId(data) {
        return data.exams.length > 0 ? Math.max(...data.exams.map(item => item.id)) + 1 : 1;
    }
    getAll(search) {
        const data = this.fileService.read();
        if (!search)
            return data.exams;
        const searchLower = search.toLowerCase();
        return data.exams.filter(exam => exam.discipline.toLowerCase().includes(searchLower) ||
            exam.department.toLowerCase().includes(searchLower));
    }
    getById(id) {
        const data = this.fileService.read();
        return data.exams.find(item => item.id === id) || null;
    }
    create(dto) {
        const data = this.fileService.read();
        const newExam = {
            ...dto,
            id: this.getNextId(data),
        };
        data.exams.push(newExam);
        this.fileService.write(data);
        return newExam;
    }
    update(id, dto) {
        const data = this.fileService.read();
        const index = data.exams.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error(`Exam with id ${id} not found`);
        }
        data.exams[index] = { ...data.exams[index], ...dto };
        this.fileService.write(data);
        return data.exams[index];
    }
    delete(id) {
        const data = this.fileService.read();
        data.exams = data.exams.filter(item => item.id !== id);
        this.fileService.write(data);
    }
};
exports.SessionsService = SessionsService;
exports.SessionsService = SessionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [file_service_1.FileService])
], SessionsService);
//# sourceMappingURL=sessions.service.js.map