import { Module } from '@nestjs/common';
import { CharacterSkillService } from './character-skill.service';
import { CharacterSkillController } from './character-skill.controller';

@Module({
  providers: [CharacterSkillService],
  controllers: [CharacterSkillController]
})
export class CharacterSkillModule {}
