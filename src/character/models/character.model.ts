import { Column, Model, Table, DataType, HasMany } from 'sequelize-typescript';
import { CharacterAbilityModifier } from './character__abilityModifier.model';
import { CharacterSkill } from './skills.model';

@Table
export class Character extends Model<Character> {
  @Column
  name: string;

  @Column
  race: string;

  @Column
  class: string;

  @Column(DataType.INTEGER)
  level: number;

  @Column
  background: string;

  @Column(DataType.JSON)
  abilityScores: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };

  @HasMany(() => CharacterAbilityModifier)
  abilityModifiers: CharacterAbilityModifier[];

  @HasMany(() => CharacterSkill)
  skillModifiers: CharacterSkill[];

  @Column(DataType.INTEGER)
  proficiencyBonus: number;

  @Column
  archeTypes: string;

  @Column(DataType.JSON)
  equipment_choices: {
    item: string;
    alternate: string | string[];
    itemDisabled: boolean;
    alternateDisabled: boolean;
    selected: string | null;
  }[];

  @Column(DataType.ARRAY(DataType.STRING))
  standart_equipment: string[];

  @Column(DataType.STRING)
  sub: string;
}
