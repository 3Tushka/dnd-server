import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSkillController } from './character-skill.controller';

describe('CharacterSkillController', () => {
  let controller: CharacterSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterSkillController],
    }).compile();

    controller = module.get<CharacterSkillController>(CharacterSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
