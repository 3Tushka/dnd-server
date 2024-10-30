import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Character } from './character.model';

@Table
export class CharacterSavingThrow extends Model<CharacterSavingThrow> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @Column
  abilityName: string; // e.g., 'Strength'

  @Column(DataType.BOOLEAN)
  proficiency: boolean;

  @Column(DataType.INTEGER)
  bonus: number;
}
