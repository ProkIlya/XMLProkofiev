import { FileService } from './file.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';
interface ExamsData {
    exams: Exam[];
}
export declare class SessionsService {
    private fileService;
    constructor(fileService: FileService<ExamsData>);
    private getNextId;
    getAll(search?: string): Exam[];
    getById(id: number): Exam | null;
    create(dto: CreateExamDto): Exam;
    update(id: number, dto: UpdateExamDto): Exam;
    delete(id: number): void;
}
export {};
