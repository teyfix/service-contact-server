import { Test, TestingModule } from '@nestjs/testing';
import { FaultRecordService } from './fault-record.service';

describe('FaultRecordService', () => {
  let service: FaultRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaultRecordService],
    }).compile();

    service = module.get<FaultRecordService>(FaultRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
