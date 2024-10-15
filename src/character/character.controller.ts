import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { Character } from './character.model';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  // @Post()
  // async create(@Body() character: Character): Promise<Character> {
  //   const createdCharacter = await this.characterService.create(character);
  //   console.log('Character created successfully:', createdCharacter);
  //   return createdCharacter;
  // }

  // @Get()
  // @UseGuards(JwtAuthGuard)
  // async getAll(@Req() req): Promise<Character[]> {
  //   const sub = req.user.sub;
  //   if (!sub) {
  //     console.error("The 'sub' parameter is undefined or null.");
  //     throw new Error("Invalid 'sub' parameter");
  //   }

  //   console.log('Server SUB:', sub);

  //   const characters = await this.characterService.getAll();
  //   const filteredCharacters = characters.filter(
  //     (character) => character.sub === sub,
  //   );

  //   return filteredCharacters;
  // }

  // @Get(':id')
  // @UseGuards(JwtAuthGuard)
  // async findOne(@Param('id') id: string, @Req() req): Promise<Character> {
  //   const sub = req.user.sub;
  //   if (!sub) {
  //     console.error("The 'sub' parameter is undefined or null.");
  //     throw new Error("Invalid 'sub' parameter");
  //   }

  //   console.log('Server SUB:', sub);

  //   const character = await this.characterService.findOne(+id);
  //   if (!character) {
  //     console.error(`Character with ID ${id} not found.`);
  //     throw new Error('Character not found');
  //   }

  //   if (character.sub !== sub) {
  //     console.error(
  //       `Server SUB ${sub} does not match character sub ${character.sub}.`,
  //     );
  //     throw new Error('Unauthorized access');
  //   }

  //   return character;
  // }
}
