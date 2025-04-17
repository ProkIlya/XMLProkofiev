import { Module } from '@nestjs/common';
import { SessionsModule } from './stocks/sessions.module';

@Module({
  imports: [SessionsModule],
})
export class AppModule {}