import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Character } from './character.model';

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel(Character) private characterModel: typeof Character,
  ) {}

  async create(character: Character): Promise<Character> {
    return this.characterModel.create(character);
  }

  async getAll(): Promise<Character[]> {
    return this.characterModel.findAll();
  }

  async findOne(id: number): Promise<Character> {
    return this.characterModel.findOne({
      where: {
        id,
      },
    });
  }
}
