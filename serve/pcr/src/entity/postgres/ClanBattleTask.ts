import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  Column,
  JoinTable,
  getConnection,
} from 'typeorm';
import { ClanBattleBoss } from './ClanBattleBoss';
import { Chara } from './Chara';
import { OrmDbName } from '../../models';

@Entity()
export class ClanBattleTask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  canAuto: number;

  @Column({ nullable: true })
  damage: number;

  @Column()
  stage: number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // 删除的级联设置需要在被删除的一侧设置
  @ManyToOne(
    (type) => ClanBattleBoss,
    (ClanBattleBoss) => ClanBattleBoss.tasks,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({
    name: 'clan_battle_boss_id',
  }) // @JoinColumn 仅在关系的一侧
  gvg: ClanBattleBoss;

  @ManyToMany((type) => Chara, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'clan_battle_chara_releation',
    joinColumn: {
      name: 'clan_battle_task_id',
    },
    inverseJoinColumn: {
      name: 'prefab_id',
    },
  }) // You must put @JoinTable on one (owning) side of relation
  charas: Chara[];

  static async getTask(id: number): Promise<ClanBattleTask> {
    const connect = await getConnection(OrmDbName.postgres);
    return await connect.getRepository(ClanBattleTask).findOne({
      where: {
        id: id,
      },
    });
  }

  static async deleteTask(id: number): Promise<boolean> {
    const connect = await getConnection(OrmDbName.postgres);
    const task = await connect.getRepository(ClanBattleTask).findOne({
      where: {
        id: id,
      },
    });
    await connect.getRepository(ClanBattleTask).remove(task);
    return true;
    // return await connect.getRepository(ClanBattleTask).remove();
  }
}
