import { getConnection, In } from 'typeorm';
import { UnitData } from '../entity/pcr/UnitData';
import { UnitRarity } from '../entity/pcr/UnitRarity';
import { OrmDbName } from '../models';
import { Chara, GvgTask } from '../models';

import { ClanBattlePeriod } from '../entity/pcr/ClanBattlePeriod';
import { ClanBattle_2MapData } from '../entity/pcr/ClanBattle_2MapData';
import { WaveGroupData } from '../entity/pcr/WaveGroupData';
import { EnemyParameter } from '../entity/pcr/EnemyParameter';
import { UnitEnemyData } from '../entity/pcr/UnitEnemyData';
import { ClanBattleTask } from '../entity/postgres/ClanBattleTask';
import { ClanBattleBoss } from '../entity/postgres/ClanBattleBoss';

// SELECT  a.prefab_id, a.unit_name, max(b.rarity)  from unit_data a LEFT JOIN unit_rarity b WHERE a.unit_id = b.unit_id AND a.comment <> ''  GROUP BY a.prefab_id, a.unit_name;
export async function getCharaList(): Promise<Chara[]> {
  const connect = getConnection(OrmDbName.sqlite);
  const res: Chara[] = await connect
    .createQueryBuilder()
    .select('a.prefabId', 'prefabId')
    .addSelect('a.unitName', 'unitName')
    .addSelect('a.searchAreaWidth', 'searchAreaWidth')
    .addSelect('max(b.rarity)', 'rarity')
    .from(UnitData, 'a')
    .leftJoin(UnitRarity, 'b', 'a.unitId = b.unitId')
    .where("a.comment <> ''")
    .groupBy('a.prefabId')
    .orderBy('a.searchAreaWidth')
    .getRawMany();
  return res;
}

export async function getBoss(): Promise<
  { prefabId: number; unitName: string }[]
> {
  const connect = getConnection(OrmDbName.sqlite);
  // 获取最后一期的会战 数据库中bossId的用处？能否直接根据bossId获取prefabId
  const period: {
    clanBattleId: number;
  } = await connect
    .createQueryBuilder()
    .select('max(a.clanBattleId)', 'clanBattleId')
    .from(ClanBattlePeriod, 'a')
    .getRawOne();
  const lastPeriodId = period.clanBattleId;
  // 获取wave用来获取.enemyId
  const wave = await connect.getRepository(ClanBattle_2MapData).findOne({
    where: {
      clanBattleId: lastPeriodId,
    },
  });

  const res: { prefabId: number; unitName: string }[] = await connect
    .createQueryBuilder()
    .select('c.prefabId', 'prefabId')
    .addSelect('c.unitName', 'unitName')
    .from(WaveGroupData, 'a')
    .leftJoin(EnemyParameter, 'b', 'a.enemyId_1 = b.enemyId')
    .leftJoin(UnitEnemyData, 'c', 'c.unitId = b.unitId')
    .where({
      waveGroupId: In([
        wave.waveGroupId_1,
        wave.waveGroupId_2,
        wave.waveGroupId_3,
        wave.waveGroupId_4,
        wave.waveGroupId_5,
      ]),
    })
    .groupBy('a.waveGroupId')
    .getRawMany();
  return res;
}

//
export async function getGvgTask(stage: number = 3): Promise<GvgTask[]> {
  const connect = getConnection(OrmDbName.postgres);
  const queryRes = await connect.query(`SELECT
  clan_battle_boss."id", 
  clan_battle_boss.prefab_id AS "prefabId", 
  clan_battle_boss.unit_name AS "unitName", 
  clan_battle_boss."server", 
  clan_battle_task."canAuto" AS "canAuto", 
  clan_battle_task.damage, 
  clan_battle_task.stage, 
  chara.prefab_id, 
  chara.unit_name, 
  chara.rarity, 
  chara.search_area_width AS "searchAreaWdith", 
  clan_battle_task."id" AS "clanBattleTaskId"
FROM
  clan_battle_boss
  LEFT JOIN
  clan_battle_task
  ON 
    clan_battle_boss."id" = clan_battle_task.clan_battle_boss_id 
  AND clan_battle_task."stage" = ${stage}
  LEFT JOIN
  clan_battle_chara_releation
  ON 
	  clan_battle_task."id" = clan_battle_chara_releation.clan_battle_task_id
  LEFT JOIN
  chara
  ON 
	  clan_battle_chara_releation.prefab_id = chara.prefab_id`);
  const map = new Map<number, GvgTask>();
  queryRes.forEach((r) => {
    const item = map.get(r.id);
    const chara = {
      prefabId: r.prefab_id,
      unitName: r.unit_name,
      rarity: r.rarity,
      searchAreaWidth: r.searchAreaWidth,
    };
    if (item) {
      const task = item.tasks.find((task) => task.id === r.clanBattleTaskId);
      if (task) {
        chara.prefabId && task.charas.push(chara);
      } else {
        item.tasks.push({
          id: r.clanBattleTaskId,
          canAuto: r.canAuto,
          stage: r.stage,
          damage: r.damage,
          charas: chara.prefabId ? [chara] : [],
        });
      }
    } else {
      map.set(r.id, {
        id: r.id,
        prefabId: r.prefabId,
        unitName: r.unitName,
        server: r.server,
        tasks: r.clanBattleTaskId
          ? [
              {
                id: r.clanBattleTaskId,
                canAuto: r.canAuto,
                stage: r.stage,
                damage: r.damage,
                charas: chara.prefabId ? [chara] : [],
              },
            ]
          : [],
      });
    }
  });
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

export async function updateTask(gvgTask: any) {
  const boss = await ClanBattleBoss.getBoss(gvgTask.bossId);
  const task = await ClanBattleTask.getTask(gvgTask.task.id);
  const clanBattleTask = task ?? new ClanBattleTask();
  clanBattleTask.canAuto = gvgTask.canAuto;
  clanBattleTask.damage = gvgTask.damage;
  clanBattleTask.stage = gvgTask.stage;
  clanBattleTask.charas = gvgTask.task.charas;
  const index = boss.tasks.findIndex((r) => r.id === clanBattleTask.id);
  if (index > -1) {
    boss.tasks.splice(index, 1);
  }
  boss.tasks.push(clanBattleTask);
  const connect = getConnection(OrmDbName.postgres);
  await connect.getRepository(ClanBattleBoss).save(boss);
  boss.tasks = [clanBattleTask];
  return boss;
}

export async function deleteTask(id: number) {
  return await ClanBattleTask.deleteTask(id);
}
