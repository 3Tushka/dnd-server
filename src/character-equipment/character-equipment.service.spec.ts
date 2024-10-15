import { Test, TestingModule } from '@nestjs/testing';
import { CharacterEquipmentService } from './character-equipment.service';

describe('CharacterEquipmentService', () => {
  let service: CharacterEquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterEquipmentService],
    }).compile();

    service = module.get<CharacterEquipmentService>(CharacterEquipmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
