import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { CharacterModule } from './character/character.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from './character/character.model';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RaceModule } from './race/race.module';
import { ClassModule } from './class/class.module';
import { AbilityModule } from './ability/ability.module';
import { SkillController } from './skill/skill.controller';
import { SkillModule } from './skill/skill.module';
import { CharacterSkillModule } from './character-skill/character-skill.module';
import { SpellModule } from './spell/spell.module';
import { CharacterSpellModule } from './character-spell/character-spell.module';
import { EquipmentModule } from './equipment/equipment.module';
import { CharacterEquipmentModule } from './character-equipment/character-equipment.module';
import { CharacterEquipment } from './character-equipment/character-equipment.model';
import { CharacterSkill } from './character-skill/character-skill.model';
import { CharacterSpell } from './character-spell/character-spell.model';
import { User } from './user/user.model';
import { Ability } from './ability/ability.model';
import { Class } from './class/class.model';
import { Equipment } from './equipment/equipment.model';
import { Race } from './race/race.model';
import { Skill } from './skill/skill.model';
import { Spell } from './spell/spell.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      logging: console.log,
    }),
    SequelizeModule.forFeature([
      Character,
      CharacterSkill,
      CharacterSpell,
      CharacterEquipment,
      User,
      Ability,
      Class,
      Equipment,
      Race,
      Skill,
      Spell,
    ]),
    DatabaseModule,
    CharacterModule,
    AuthModule,
    UserModule,
    RaceModule,
    ClassModule,
    AbilityModule,
    SkillModule,
    CharacterSkillModule,
    SpellModule,
    CharacterSpellModule,
    EquipmentModule,
    CharacterEquipmentModule,
  ],
  controllers: [AppController, SkillController],
  providers: [AppService],
})
export class AppModule {}
