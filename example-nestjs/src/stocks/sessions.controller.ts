import { Controller, Get, Post, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionResultDto } from './dto/create-session-result.dto';
import { UpdateSessionResultDto } from './dto/update-session-result.dto';
import { CreateSessionItemDto } from './dto/create-session-item.dto';
import { UpdateSessionItemDto } from './dto/update-session-item.dto';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  // ================== SessionResults ==================
  @Get('results')
  getResults(@Query('semester') semester?: string) {
    return this.sessionsService.getResults(semester);
  }

  @Get('results/:id')
  getResultById(@Param('id') id: string) {
    return this.sessionsService.findResultById(+id);
  }

  @Post('results/:semester')
  addResult(
    @Param('semester') semester: string,
    @Body() dto: CreateSessionResultDto,
  ) {
    return this.sessionsService.addResult(semester, dto);
  }

  @Patch('results/:id')
  updateResult(
    @Param('id') id: string,
    @Body() dto: UpdateSessionResultDto,
  ) {
    return this.sessionsService.updateResult(+id, dto);
  }

  @Delete('results/:id')
  deleteResult(@Param('id') id: string) {
    return this.sessionsService.deleteResult(+id);
  }

  // ================== SessionItems ==================
  @Get('items')
  getItems(@Query('semester') semester?: string) {
    return this.sessionsService.getItems(semester);
  }

  @Get('items/:id')
  getItemById(@Param('id') id: string) {
    return this.sessionsService.findItemById(+id);
  }

  @Post('items/:semester')
  addItem(
    @Param('semester') semester: string,
    @Body() dto: CreateSessionItemDto,
  ) {
    return this.sessionsService.addItem(semester, dto);
  }

  @Patch('items/:id')
  updateItem(
    @Param('id') id: string,
    @Body() dto: UpdateSessionItemDto,
  ) {
    return this.sessionsService.updateItem(+id, dto);
  }

  @Delete('items/:id')
  deleteItem(@Param('id') id: string) {
    return this.sessionsService.deleteItem(+id);
  }
}