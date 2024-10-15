import { Module } from '@nestjs/common';
import { CharacterSpellService } from './character-spell.service';
import { CharacterSpellController } from './character-spell.controller';

@Module({
  providers: [CharacterSpellService],
  controllers: [CharacterSpellController]
})
export class CharacterSpellModule {}
