// src/models/class.model.ts
import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Character } from 'src/character/character.model';

@Table
export class Class extends Model<Class> {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @HasMany(() => Character)
  characters: Character[];
}
