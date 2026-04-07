import { PartialType } from '@nestjs/mapped-types';
import { CreateTake2Dto } from './create-take2.dto';

export class UpdateTake2Dto extends PartialType(CreateTake2Dto) {}
