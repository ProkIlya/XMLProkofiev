import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FileService<T> {
  private readonly filePath: string;

  constructor(filePath: string) {
    const basePath = fs.existsSync(path.join(__dirname, '..', 'src'))
    ? path.join(__dirname, '..', 'src', 'assets')
    : path.join(__dirname, '..', 'assets');
    this.filePath = path.join(basePath, filePath);
  }

  read(): T {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data);
  }

  write(data: T): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf8');
  }
}