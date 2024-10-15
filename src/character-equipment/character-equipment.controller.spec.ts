import { Test, TestingModule } from '@nestjs/testing';
import { CharacterEquipmentController } from './character-equipment.controller';

describe('CharacterEquipmentController', () => {
  let controller: CharacterEquipmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterEquipmentController],
    }).compile();

    controller = module.get<CharacterEquipmentController>(
      CharacterEquipmentController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
