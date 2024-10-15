// src/models/spell.model.ts
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { CharacterSpell } from 'src/character-spell/character-spell.model';
import { Character } from 'src/character/character.model';

@Table
export class Spell extends Model<Spell> {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.INTEGER)
  level: number;

  @Column(DataType.STRING)
  school: string;

  @Column(DataType.STRING)
  castingTime: string;

  @Column(DataType.STRING)
  range: string;

  @Column(DataType.STRING)
  components: string;

  @Column(DataType.STRING)
  duration: string;

  @Column(DataType.TEXT)
  description: string;

  @BelongsToMany(() => Character, () => CharacterSpell)
  characters: Character[];
}
