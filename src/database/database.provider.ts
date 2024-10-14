import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
      });
      // Add models here
      // sequelize.addModels([YourModel]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
