import { Module } from '@nestjs/common';
import { SessionsController } from './sessions.controller';
import { SessionsService } from './sessions.service';
import { FileService } from './file.service';
import { SessionResult } from './entities/session-result.entity';
import { SessionItem } from './entities/session-item.entity';

interface SessionData {
  sessionResults: Record<string, SessionResult[]>;
  sessionItems: Record<string, SessionItem[]>;
}

@Module({
  controllers: [SessionsController],
  providers: [
    SessionsService,
    {
      provide: FileService<SessionData>,
      useFactory: () => new FileService('sessions.json'),
    },
  ],
})
export class SessionsModule {}