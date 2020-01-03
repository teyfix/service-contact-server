import { Test, TestingModule } from '@nestjs/testing';
import { FieldTeamService } from './field-team.service';

describe('FieldTeamService', () => {
  let service: FieldTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FieldTeamService],
    }).compile();

    service = module.get<FieldTeamService>(FieldTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
