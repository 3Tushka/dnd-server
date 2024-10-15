// src/models/skill.model.ts
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { CharacterSkill } from 'src/character-skill/character-skill.model';
import { Character } from 'src/character/character.model';

@Table
export class Skill extends Model<Skill> {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  associatedAbility: string;

  @BelongsToMany(() => Character, () => CharacterSkill)
  characters: Character[];
}
