import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// Models imports from the models folder
import { Character } from './models/character.model';
import { CharacterSkill } from './models/skills.model';
import { CharacterSavingThrow } from './models/savings.model';
import { EquipmentChoice } from './models/equipment__choice.model';
import { CharacterAbilityModifier } from './models/character__abilityModifier.model';

type AbilityScoreKey =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma';

type SkillKey =
  | 'Acrobatics'
  | 'Animal Handling'
  | 'Arcana'
  | 'Athletics'
  | 'Deception'
  | 'History'
  | 'Insight'
  | 'Intimidation'
  | 'Investigation'
  | 'Medicine'
  | 'Nature'
  | 'Perception'
  | 'Performance'
  | 'Persuasion'
  | 'Religion'
  | 'Sleight of Hand'
  | 'Stealth'
  | 'Survival';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character) private characterModel: typeof Character,
    @InjectModel(CharacterSkill)
    private characterSkillModel: typeof CharacterSkill,
    @InjectModel(CharacterSavingThrow)
    private characterSavingThrowModel: typeof CharacterSavingThrow,
    @InjectModel(EquipmentChoice)
    private equipmentChoiceModel: typeof EquipmentChoice,
    @InjectModel(CharacterAbilityModifier)
    private abilityModifierModel: typeof CharacterAbilityModifier,
  ) {}

  SkillAbilityMap: { [key in SkillKey]: AbilityScoreKey } = {
    Acrobatics: 'dexterity',
    'Animal Handling': 'wisdom',
    Arcana: 'intelligence',
    Athletics: 'strength',
    Deception: 'charisma',
    History: 'intelligence',
    Insight: 'wisdom',
    Intimidation: 'charisma',
    Investigation: 'intelligence',
    Medicine: 'wisdom',
    Nature: 'intelligence',
    Perception: 'wisdom',
    Performance: 'charisma',
    Persuasion: 'charisma',
    Religion: 'intelligence',
    'Sleight of Hand': 'dexterity',
    Stealth: 'dexterity',
    Survival: 'wisdom',
  };

  async create(character: Character, skills: string[]): Promise<Character> {
    const savedCharacter = await this.characterModel.create(character);

    // Save skills to CharacterSkill model
    const skillRecords = skills.map((skillName) => {
      const skillProf = this.SkillAbilityMap[skillName as SkillKey];
      return {
        characterId: savedCharacter.id,
        skillName,
        skillProf,
        proficiency: true, // Assuming proficiency is true initially
        bonus: 0, // Assuming no bonus initially
      };
    });

    await this.characterSkillModel.bulkCreate(skillRecords);

    await this.calculateAllAbilityModifiers(savedCharacter.id);
    return savedCharacter;
  }

  async getAll(): Promise<Character[]> {
    return this.characterModel.findAll();
  }

  async findOne(id: number): Promise<Character> {
    const character = await this.characterModel.findOne({
      where: {
        id,
      },
      include: [CharacterAbilityModifier, CharacterSkill],
    });

    if (!character) {
      throw new Error('Character not found');
    }

    const abilityScores = Object.keys(
      character.abilityScores,
    ) as AbilityScoreKey[];

    for (const ability of abilityScores) {
      const skills = await this.characterSkillModel.findAll({
        where: { characterId: id, skillProf: ability },
      });

      for (const skill of skills) {
        await this.calculateSkillModifier(
          id,
          skill.skillName,
          character.abilityScores[ability],
          skill.proficiency,
          character.proficiencyBonus,
        );
      }
    }

    return character;
  }

  calculateAbilityModifier(abilityScore: number): number {
    return Math.floor((abilityScore - 10) / 2);
  }

  calculateProficiencyBonus(level: number): number {
    return Math.floor((level - 1) / 4) + 2;
  }

  async calculateAllAbilityModifiers(id: number) {
    const character = await this.characterModel.findOne({
      where: { id },
      include: [CharacterAbilityModifier], // Include the associated modifiers
    });

    if (!character) {
      throw new Error('Character not found');
    }

    const updatedAbilityModifiers: Record<AbilityScoreKey, number> =
      {} as Record<AbilityScoreKey, number>;

    (Object.keys(character.abilityScores) as AbilityScoreKey[]).forEach(
      (ability) => {
        updatedAbilityModifiers[ability] = this.calculateAbilityModifier(
          character.abilityScores[ability],
        );
      },
    );

    const abilityModifierRecords = (
      Object.keys(updatedAbilityModifiers) as AbilityScoreKey[]
    ).map((abilityName) => ({
      characterId: id,
      abilityName: abilityName,
      modifier: updatedAbilityModifiers[abilityName],
    }));

    const existingModifiers = await this.abilityModifierModel.findAll({
      where: { characterId: id },
    });

    if (existingModifiers.length === 0) {
      await this.abilityModifierModel.bulkCreate(abilityModifierRecords);
    } else {
      console.log('Ability modifiers already exist for this character.');
    }
  }

  // This function calculates the skill modifier based on the ability score, proficiency, and proficiency bonus
  async calculateSkillModifier(
    characterId: number,
    skillName: string,
    abilityScore: number,
    proficiency: boolean,
    proficiencyBonus: number,
  ): Promise<number> {
    const abilityModifier = this.calculateAbilityModifier(abilityScore);
    let skillModifier = abilityModifier;

    if (proficiency) {
      skillModifier += proficiencyBonus;
    }

    // Save the skill modifier to the database
    await this.characterSkillModel.update(
      { bonus: skillModifier },
      { where: { characterId, skillName } },
    );

    return skillModifier;
  }
}
