// src/models/character-spell.model.ts
import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Character } from 'src/character/character.model';
import { Spell } from 'src/spell/spell.model';

@Table
export class CharacterSpell extends Model<CharacterSpell> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @ForeignKey(() => Spell)
  @Column
  spellId: number;

  @Column(DataType.BOOLEAN)
  isPrepared: boolean;

  @Column(DataType.INTEGER)
  spellSlotsUsed: number;
}
