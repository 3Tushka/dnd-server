import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Character } from './character.model';

@Table
export class CharacterSkill extends Model<CharacterSkill> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @Column
  skillName: string;

  @Column(DataType.STRING)
  skillProf: string;

  @Column(DataType.BOOLEAN)
  proficiency: boolean;

  @Column(DataType.INTEGER)
  bonus: number;
}
