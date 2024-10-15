import { Module } from '@nestjs/common';
import { AbilityService } from './ability.service';
import { AbilityController } from './ability.controller';

@Module({
  providers: [AbilityService],
  controllers: [AbilityController]
})
export class AbilityModule {}
