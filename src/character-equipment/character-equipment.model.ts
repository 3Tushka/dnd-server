// src/models/character-equipment.model.ts
import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Character } from 'src/character/character.model';
import { Equipment } from 'src/equipment/equipment.model';

@Table
export class CharacterEquipment extends Model<CharacterEquipment> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @ForeignKey(() => Equipment)
  @Column
  equipmentId: number;

  @Column(DataType.INTEGER)
  quantity: number;

  @Column(DataType.BOOLEAN)
  isEquipped: boolean;
}
