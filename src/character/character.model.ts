// src/models/character.model.ts
import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  DataType,
  HasOne,
} from 'sequelize-typescript';
import { Ability } from 'src/ability/ability.model';
import { CharacterEquipment } from 'src/character-equipment/character-equipment.model';
import { CharacterSkill } from 'src/character-skill/character-skill.model';
import { CharacterSpell } from 'src/character-spell/character-spell.model';
import { Class } from 'src/class/class.model';
import { Equipment } from 'src/equipment/equipment.model';
import { Race } from 'src/race/race.model';
import { Skill } from 'src/skill/skill.model';
import { Spell } from 'src/spell/spell.model';
import { User } from 'src/user/user.model';

@Table
export class Character extends Model<Character> {
  @Column(DataType.STRING)
  name: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Race)
  @Column
  raceId: number;

  @BelongsTo(() => Race)
  race: Race;

  @ForeignKey(() => Class)
  @Column
  classId: number;

  @BelongsTo(() => Class)
  class: Class;

  @Column(DataType.INTEGER)
  level: number;

  @Column(DataType.INTEGER)
  experiencePoints: number;

  @HasOne(() => Ability)
  abilities: Ability;

  @BelongsToMany(() => Skill, () => CharacterSkill)
  skills: Skill[];

  @BelongsToMany(() => Spell, () => CharacterSpell)
  spells: Spell[];

  @BelongsToMany(() => Equipment, () => CharacterEquipment)
  equipment: Equipment[];
}
