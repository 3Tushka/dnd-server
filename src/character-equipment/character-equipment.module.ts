import { Module } from '@nestjs/common';
import { CharacterEquipmentService } from './character-equipment.service';
import { CharacterEquipmentController } from './character-equipment.controller';

@Module({
  providers: [CharacterEquipmentService],
  controllers: [CharacterEquipmentController]
})
export class CharacterEquipmentModule {}
