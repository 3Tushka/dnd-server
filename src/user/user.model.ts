// src/models/user.model.ts
import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Character } from 'src/character/character.model';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  sub: string; // Auth0 'sub' claim

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  name: string;

  @HasMany(() => Character)
  characters: Character[];
}
