import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  getConnection,
} from 'typeorm';
import { ClanBattleTask } from './ClanBattleTask';
import { OrmDbName, ServerType } from '../../models';

@Entity()
export class ClanBattleBoss {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'prefab_id' })
  prefabId: number;

  @Column({ name: 'unit_name' })
  unitName: string;

  @Column()
  server: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => ClanBattleTask, (clanBattleTask) => clanBattleTask.gvg, {
    cascade: true,
  })
  tasks: ClanBattleTask[];

  static async getBoss(id: number): Promise<ClanBattleBoss> {
    const connect = await getConnection(OrmDbName.postgres);
    return await connect.getRepository(ClanBattleBoss).findOne({
      where: {
        id: id,
      },
      relations: ['tasks'],
    });
  }

  static async clear(): Promise<void> {
    const connect = await getConnection(OrmDbName.postgres);
    connect.transaction(async (manger) => {
      const repository = await manger.getRepository(ClanBattleBoss);
      const clanBattleBoss = await repository.find();
      for (const r of clanBattleBoss) {
        await repository.remove(r);
      }
    });
  }

  static async updateBoss(
    bossList: { prefabId: number; unitName: string }[],
  ): Promise<void> {
    const connect = await getConnection(OrmDbName.postgres);
    connect.transaction(async (manger) => {
      const repository = await manger.getRepository(ClanBattleBoss);
      for (const r of bossList) {
        const res = await repository.findOne({
          where: {
            prefabId: r.prefabId,
          },
        });
        if (!res) {
          const boss = new ClanBattleBoss();
          boss.prefabId = r.prefabId;
          boss.unitName = r.unitName;
          boss.server = ServerType.jp;
          repository.save(boss);
        }
      }
    });
  }
}
