import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { FileService } from './file.service';
import { Exam } from './entities/exam.entity';

interface ExamsData {
  exams: Exam[];
}

@Module({
  controllers: [SessionsController],
  providers: [
    SessionsService,
    {
      provide: FileService<ExamsData>,
      useFactory: () => new FileService('sessions.json'),
    },
  ],
})
export class SessionsModule {}