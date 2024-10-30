import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from './models/character.model';
import { CharacterAbilityModifier } from './models/character__abilityModifier.model';
import { EquipmentChoice } from './models/equipment__choice.model';
import { CharacterSavingThrow } from './models/savings.model';
import { CharacterSkill } from './models/skills.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Character,
      CharacterAbilityModifier,
      CharacterSkill,
      CharacterSavingThrow,
      EquipmentChoice,
    ]),
  ],
  providers: [CharacterService],
  controllers: [CharacterController],
  exports: [CharacterService],
})
export class CharacterModule {}
