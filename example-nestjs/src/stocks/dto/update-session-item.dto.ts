import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionItemDto } from './create-session-item.dto';

export class UpdateSessionItemDto extends PartialType(CreateSessionItemDto) {}