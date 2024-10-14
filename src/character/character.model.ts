import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Character extends Model<Character> {
  @Column
  name: string;

  @Column
  race: string;

  @Column
  class: string;

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

  @Column
  archeTypes: string;

  @Column(DataType.ARRAY(DataType.STRING))
  skills: string[];

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
