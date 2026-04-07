import { Module } from '@nestjs/common';
import { Take2Service } from './take2.service';
import { Take2Controller } from './take2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Take2 } from './entities/take2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Take2])],
  controllers: [Take2Controller],
  providers: [Take2Service],
})
export class Take2Module {}
