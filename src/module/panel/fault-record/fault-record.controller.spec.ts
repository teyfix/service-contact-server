import { Test, TestingModule } from '@nestjs/testing';
import { FaultRecordController } from './fault-record.controller';

describe('FaultRecord Controller', () => {
  let controller: FaultRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaultRecordController],
    }).compile();

    controller = module.get<FaultRecordController>(FaultRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
