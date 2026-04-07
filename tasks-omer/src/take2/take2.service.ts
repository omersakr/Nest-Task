import { Injectable } from '@nestjs/common';
import { CreateTake2Dto } from './dto/create-take2.dto';
import { UpdateTake2Dto } from './dto/update-take2.dto';

@Injectable()
export class Take2Service {
  create(createTake2Dto: CreateTake2Dto) {
    return 'This action adds a new take2';
  }

  findAll() {
    return `This action returns all take2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} take2`;
  }

  update(id: number, updateTake2Dto: UpdateTake2Dto) {
    return `This action updates a #${id} take2`;
  }

  remove(id: number) {
    return `This action removes a #${id} take2`;
  }
}
