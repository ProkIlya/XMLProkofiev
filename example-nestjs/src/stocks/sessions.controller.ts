import { Controller, Get, Post, Patch, Delete, Param, Query, Body } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';

@Controller('exams')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Get()
  getAll(@Query('search') search?: string) {
    return this.sessionsService.getAll(search);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.sessionsService.getById(+id);
  }

  @Post()
  create(@Body() dto: CreateExamDto) {
    return this.sessionsService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExamDto) {
    return this.sessionsService.update(+id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sessionsService.delete(+id);
  }
}