import { Module } from '@nestjs/common';
import { SpellService } from './spell.service';
import { SpellController } from './spell.controller';

@Module({
  providers: [SpellService],
  controllers: [SpellController]
})
export class SpellModule {}
