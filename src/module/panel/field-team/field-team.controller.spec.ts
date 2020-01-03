import { Test, TestingModule } from '@nestjs/testing';
import { FieldTeamController } from './field-team.controller';

describe('FieldTeam Controller', () => {
  let controller: FieldTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FieldTeamController],
    }).compile();

    controller = module.get<FieldTeamController>(FieldTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
