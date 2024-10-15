// src/models/character-skill.model.ts
import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Character } from 'src/character/character.model';
import { Skill } from 'src/skill/skill.model';

@Table
export class CharacterSkill extends Model<CharacterSkill> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @ForeignKey(() => Skill)
  @Column
  skillId: number;

  @Column(DataType.BOOLEAN)
  isProficient: boolean;

  @Column(DataType.BOOLEAN)
  expertise: boolean;
}
