// src/models/equipment.model.ts
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { CharacterEquipment } from 'src/character-equipment/character-equipment.model';
import { Character } from 'src/character/character.model';

@Table
export class Equipment extends Model<Equipment> {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  type: string; // Weapon, Armor, Tool, Gear

  @Column(DataType.FLOAT)
  cost: number;

  @Column(DataType.FLOAT)
  weight: number;

  @Column(DataType.STRING)
  properties: string;

  @Column(DataType.TEXT)
  description: string;

  @BelongsToMany(() => Character, () => CharacterEquipment)
  characters: Character[];
}
