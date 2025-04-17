import { Injectable } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';

interface ExamsData {
  exams: Exam[];
}

@Injectable()
export class SessionsService {
  constructor(private fileService: FileService<ExamsData>) {}

  private getNextId(data: ExamsData): number {
    return data.exams.length > 0 ? Math.max(...data.exams.map(item => item.id)) + 1 : 1;
  }

  getAll(search?: string): Exam[] {
    const data = this.fileService.read();
    if (!search) return data.exams;
    
    const searchLower = search.toLowerCase();
    return data.exams.filter(exam => 
      exam.discipline.toLowerCase().includes(searchLower) ||
      exam.department.toLowerCase().includes(searchLower)
    );
  }

  getById(id: number): Exam | null {
    const data = this.fileService.read();
    return data.exams.find(item => item.id === id) || null;
  }

  create(dto: CreateExamDto): Exam {
    const data = this.fileService.read();
    const newExam = {
      ...dto,
      id: this.getNextId(data),
    };
    data.exams.push(newExam);
    this.fileService.write(data);
    return newExam;
  }

  update(id: number, dto: UpdateExamDto): Exam {
    const data = this.fileService.read();
    const index = data.exams.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error(`Exam with id ${id} not found`);
    }
    data.exams[index] = { ...data.exams[index], ...dto };
    this.fileService.write(data);
    return data.exams[index];
  }

  delete(id: number): void {
    const data = this.fileService.read();
    data.exams = data.exams.filter(item => item.id !== id);
    this.fileService.write(data);
  }
}