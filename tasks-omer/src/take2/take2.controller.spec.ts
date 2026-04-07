import { Test, TestingModule } from '@nestjs/testing';
import { Take2Controller } from './take2.controller';
import { Take2Service } from './take2.service';

describe('Take2Controller', () => {
  let controller: Take2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Take2Controller],
      providers: [Take2Service],
    }).compile();

    controller = module.get<Take2Controller>(Take2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
