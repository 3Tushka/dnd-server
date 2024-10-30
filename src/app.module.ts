import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { CharacterModule } from './character/character.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { Character } from './character/models/character.model';
import { CampaignModule } from './campaign/campaign.module';
import { CharacterSkill } from './character/models/skills.model';
import { CharacterSavingThrow } from './character/models/savings.model';
import { CharacterAbilityModifier } from './character/models/character__abilityModifier.model';

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
      CharacterSavingThrow,
      CharacterAbilityModifier,
    ]),
    DatabaseModule,
    CharacterModule,
    AuthModule,
    CampaignModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
