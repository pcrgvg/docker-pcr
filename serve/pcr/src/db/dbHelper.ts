import fs from 'fs';
import brotli from 'brotli';
import { ServerType } from '../models';
import path from 'path';

import { http } from '../utils/axios';
import { DbVersion } from '../entity/postgres/DbVersion';
import { wrapAsync } from '../utils/wrap';
import { getCharaList, getBoss } from '../logic/pcr';
import { Chara } from '../entity/postgres/Chara';
import { ClanBattleBoss } from '../entity/postgres/ClanBattleBoss';

export async function checkDbVersion(
  server: ServerType = ServerType.jp,
): Promise<void> {
  const url = `/last_version_${server}.json`;
  console.log('检查数据库版本');
  const [dbversion, err] = await wrapAsync<DbVersion>(DbVersion.getDbVersion)();
  const [res] = await wrapAsync<{
    TruthVersion: string;
    hash: string;
    PrefabVer: string;
  }>(http.get)(url);
  console.log('检查数据库版本结束');
  const truthVersion = res.TruthVersion;
  if (!err) {
    if (dbversion.version !== truthVersion) {
      dbversion.version = truthVersion;
      updateDb(dbversion);
    }
  } else {
    const dbversion = new DbVersion();
    dbversion.server = server;
    dbversion.version = truthVersion;
    updateDb(dbversion);
  }
}

async function updateDb(
  dbVersion: DbVersion,
  server: ServerType = ServerType.jp,
) {
  try {
    const url = `/db/redive_${server}.db.br`;
    console.log('pcr 数据库更新中');
    const res: any = await http.get(url, { responseType: 'arraybuffer' });
    const dbBuffer = brotli.decompress(res);
    fs.writeFileSync(
      path.join(process.cwd(), `src/assets/redive_${server}.db`),
      dbBuffer,
    );
    DbVersion.updateDbVersion(dbVersion);
    const charas = await getCharaList();
    Chara.updateChara(charas);
    const bossList = await getBoss();
    ClanBattleBoss.updateBoss(bossList);
    console.log('pcr 数据库更新完毕');
  } catch (error) {
    console.log(error, '更新日服数据库失败');
  }
}
