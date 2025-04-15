import { Injectable } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateSessionResultDto } from './dto/create-session-result.dto';
import { UpdateSessionResultDto } from './dto/update-session-result.dto';
import { CreateSessionItemDto } from './dto/create-session-item.dto';
import { UpdateSessionItemDto } from './dto/update-session-item.dto';
import { SessionResult } from './entities/session-result.entity';
import { SessionItem } from './entities/session-item.entity';

interface SessionData {
  sessionResults: Record<string, SessionResult[]>;
  sessionItems: Record<string, SessionItem[]>;
}

@Injectable()
export class SessionsService {
  constructor(private fileService: FileService<SessionData>) {}

  // ======== SessionResults ========
  private getNextResultId(data: SessionData): number {
    const allResults = Object.values(data.sessionResults).flat();
    return allResults.length > 0 ? Math.max(...allResults.map(item => item.id)) + 1 : 1;
  }

  getResults(semester?: string): SessionResult[] {
    const data = this.fileService.read();
    return semester
      ? data.sessionResults[semester] || []
      : Object.values(data.sessionResults).flat();
  }

  findResultById(id: number): SessionResult | null {
    const data = this.fileService.read();
    const allResults = Object.values(data.sessionResults).flat();
    return allResults.find(item => item.id === id) || null;
  }

  addResult(semester: string, dto: CreateSessionResultDto): SessionResult {
    const data = this.fileService.read();
    const newResult = {
      ...dto,
      id: this.getNextResultId(data),
      semester, // Добавляем семестр в запись
    };
    data.sessionResults[semester] = [...(data.sessionResults[semester] || []), newResult];
    this.fileService.write(data);
    return newResult;
  }

  updateResult(id: number, dto: UpdateSessionResultDto): void {
    const data = this.fileService.read();
    for (const semester in data.sessionResults) {
      const index = data.sessionResults[semester].findIndex(item => item.id === id);
      if (index !== -1) {
        data.sessionResults[semester][index] = {
          ...data.sessionResults[semester][index],
          ...dto,
        };
        this.fileService.write(data);
        return;
      }
    }
    throw new Error(`SessionResult with id ${id} not found`);
  }

  deleteResult(id: number): void {
    const data = this.fileService.read();
    for (const semester in data.sessionResults) {
      data.sessionResults[semester] = data.sessionResults[semester].filter(
        item => item.id !== id,
      );
    }
    this.fileService.write(data);
  }

  // ======== SessionItems ========
  private getNextItemId(data: SessionData): number {
    const allItems = Object.values(data.sessionItems).flat();
    return allItems.length > 0 ? Math.max(...allItems.map(item => item.id)) + 1 : 1;
  }

  getItems(semester?: string): SessionItem[] {
    const data = this.fileService.read();
    return semester
      ? data.sessionItems[semester] || []
      : Object.values(data.sessionItems).flat();
  }

  findItemById(id: number): SessionItem | null {
    const data = this.fileService.read();
    const allItems = Object.values(data.sessionItems).flat();
    return allItems.find(item => item.id === id) || null;
  }

  addItem(semester: string, dto: CreateSessionItemDto): SessionItem {
    const data = this.fileService.read();
    const newItem = {
      ...dto,
      id: this.getNextItemId(data),
      semester, // Добавляем семестр в запись
    };
    data.sessionItems[semester] = [...(data.sessionItems[semester] || []), newItem];
    this.fileService.write(data);
    return newItem;
  }

  updateItem(id: number, dto: UpdateSessionItemDto): void {
    const data = this.fileService.read();
    for (const semester in data.sessionItems) {
      const index = data.sessionItems[semester].findIndex(item => item.id === id);
      if (index !== -1) {
        data.sessionItems[semester][index] = {
          ...data.sessionItems[semester][index],
          ...dto,
        };
        this.fileService.write(data);
        return;
      }
    }
    throw new Error(`SessionItem with id ${id} not found`);
  }

  deleteItem(id: number): void {
    const data = this.fileService.read();
    for (const semester in data.sessionItems) {
      data.sessionItems[semester] = data.sessionItems[semester].filter(
        item => item.id !== id,
      );
    }
    this.fileService.write(data);
  }
}