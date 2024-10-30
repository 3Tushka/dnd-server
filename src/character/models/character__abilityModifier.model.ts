import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Character } from './character.model';

@Table
export class CharacterAbilityModifier extends Model<CharacterAbilityModifier> {
  @ForeignKey(() => Character)
  @Column
  characterId: number;

  @BelongsTo(() => Character)
  character: Character;

  @Column
  abilityName: string;

  @Column(DataType.INTEGER)
  modifier: number;
}
