// src/models/ability.model.ts
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Character } from 'src/character/character.model';

@Table
export class Ability extends Model<Ability> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @BelongsTo(() => Character)
  character: Character;

  @Column(DataType.INTEGER)
  strength: number;

  @Column(DataType.INTEGER)
  dexterity: number;

  @Column(DataType.INTEGER)
  constitution: number;

  @Column(DataType.INTEGER)
  intelligence: number;

  @Column(DataType.INTEGER)
  wisdom: number;

  @Column(DataType.INTEGER)
  charisma: number;
}
