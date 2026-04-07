import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Take2Service } from './take2.service';
import { CreateTake2Dto } from './dto/create-take2.dto';
import { UpdateTake2Dto } from './dto/update-take2.dto';

@Controller('take2')
export class Take2Controller {
  constructor(private readonly take2Service: Take2Service) {}

  @Post()
  create(@Body() createTake2Dto: CreateTake2Dto) {
    return this.take2Service.create(createTake2Dto);
  }

  @Get()
  findAll() {
    return this.take2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.take2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTake2Dto: UpdateTake2Dto) {
    return this.take2Service.update(+id, updateTake2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.take2Service.remove(+id);
  }
}
