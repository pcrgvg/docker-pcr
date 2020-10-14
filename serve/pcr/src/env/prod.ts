import { EnvConfig, OrmDbName, OrmDbType } from '../models';
import path from 'path';

export const Config: EnvConfig = {
  port: 5000,
  ormOption: [
    {
      name: OrmDbName.sqlite,
      type: OrmDbType.sqlite,
      database: path.join(process.cwd(), 'src/assets/redive_jp.db'),
      synchronize: true,
      logging: false,
      entities: ['src/entity/pcr/**/*.ts'],
      migrations: ['src/migration/pcr/**/*.ts'],
      subscribers: ['src/subscriber/pcr/**/*.ts'],
    },
    {
      name: OrmDbName.postgres,
      type: OrmDbType.postgres,
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      synchronize: true,
      logging: false,
      entities: ['src/entity/postgres/**/*.ts'],
      migrations: ['src/migration/postgres/**/*.ts'],
      subscribers: ['src/subscriber/postgres/**/*.ts'],
    },
  ],
};
