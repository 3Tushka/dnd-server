import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSkillService } from './character-skill.service';

describe('CharacterSkillService', () => {
  let service: CharacterSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterSkillService],
    }).compile();

    service = module.get<CharacterSkillService>(CharacterSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
