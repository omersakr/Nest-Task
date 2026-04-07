import { Test, TestingModule } from '@nestjs/testing';
import { Take2Service } from './take2.service';

describe('Take2Service', () => {
  let service: Take2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Take2Service],
    }).compile();

    service = module.get<Take2Service>(Take2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
