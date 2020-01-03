import { Test, TestingModule } from '@nestjs/testing';
import { FaultController } from './fault.controller';

describe('Fault Controller', () => {
  let controller: FaultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaultController],
    }).compile();

    controller = module.get<FaultController>(FaultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
