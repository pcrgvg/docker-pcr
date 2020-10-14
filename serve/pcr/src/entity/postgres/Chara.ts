import { Entity, Column, getConnection, PrimaryColumn } from 'typeorm';
import { OrmDbName } from '../../models';

@Entity()
export class Chara {
  @PrimaryColumn({ name: 'prefab_id' })
  prefabId: number;

  @Column({ name: 'unit_name' })
  unitName: string;

  @Column()
  rarity: number;

  @Column({ name: 'search_area_width' })
  searchAreaWidth: number;

  static async updateChara(charas: Chara[]) {
    const connect = await getConnection(OrmDbName.postgres);
    connect.transaction(async (manger) => {
      const repository = await manger.getRepository(Chara);
      for (const r of charas) {
        const res = await repository.findOne({
          where: {
            prefabId: r.prefabId,
          },
        });
        if (!res) {
          const chara = new Chara();
          chara.prefabId = r.prefabId;
          chara.unitName = r.unitName;
          chara.rarity = r.rarity;
          chara.searchAreaWidth = r.searchAreaWidth;
          repository.save(chara);
        }
      }
    });
  }
}
