import { SessionsService } from './sessions.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
export declare class SessionsController {
    private readonly sessionsService;
    constructor(sessionsService: SessionsService);
    getAll(search?: string): import("./entities/exam.entity").Exam[];
    getById(id: string): import("./entities/exam.entity").Exam | null;
    create(dto: CreateExamDto): import("./entities/exam.entity").Exam;
    update(id: string, dto: UpdateExamDto): import("./entities/exam.entity").Exam;
    delete(id: string): void;
}
