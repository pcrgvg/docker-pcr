import { Entity, Column, PrimaryGeneratedColumn, getConnection } from 'typeorm';
import { OrmDbName } from '../../models';
import { ServerType } from '../../models';

@Entity()
export class DbVersion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  server: string;

  @Column()
  version: string;

  static async getDbVersion(
    server: ServerType = ServerType.jp,
  ): Promise<DbVersion> {
    const connect = await getConnection(OrmDbName.postgres);
    const res = await connect
      .getRepository(DbVersion)
      .findOneOrFail({ where: { server: server } });
    return res;
  }

  static async updateDbVersion(dbVersion: DbVersion): Promise<void> {
    const connect = await getConnection(OrmDbName.postgres);
    connect.getRepository(DbVersion).save(dbVersion);
  }
}
