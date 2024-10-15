import { Test, TestingModule } from '@nestjs/testing';
import { CharacterSpellController } from './character-spell.controller';

describe('CharacterSpellController', () => {
  let controller: CharacterSpellController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterSpellController],
    }).compile();

    controller = module.get<CharacterSpellController>(CharacterSpellController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
