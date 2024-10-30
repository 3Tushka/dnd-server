import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Character } from './character.model';

@Table
export class EquipmentChoice extends Model<EquipmentChoice> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @Column
  item: string;

  @Column
  alternate: string; // Store as a comma-separated list or create a related table for alternatives

  @Column(DataType.BOOLEAN)
  itemDisabled: boolean;

  @Column(DataType.BOOLEAN)
  alternateDisabled: boolean;

  @Column
  selected: string | null;
}
