import { Module } from '@nestjs/common';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from './character.model';

@Module({
  imports: [SequelizeModule.forFeature([Character])],
  providers: [CharacterService],
  controllers: [CharacterController],
  exports: [CharacterService],
})
export class CharacterModule {}
