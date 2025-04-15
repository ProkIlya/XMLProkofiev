import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionResultDto } from './create-session-result.dto';

export class UpdateSessionResultDto extends PartialType(CreateSessionResultDto) {}