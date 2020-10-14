import { Column, Entity } from 'typeorm';

@Entity('clan_battle_s_boss_data')
export class ClanBattleSBossData {
  @Column('integer', { primary: true, name: 'boss_id' })
  bossId: number;

  @Column('integer', { name: 'clan_battle_id' })
  clanBattleId: number;

  @Column('integer', { name: 'difficulty' })
  difficulty: number;

  @Column('integer', { name: 'order_num' })
  orderNum: number;

  @Column('integer', { name: 'boss_thumb_id' })
  bossThumbId: number;

  @Column('integer', { name: 'position_x' })
  positionX: number;

  @Column('integer', { name: 'position_y' })
  positionY: number;

  @Column('real', { name: 'scale_ratio' })
  scaleRatio: number;

  @Column('real', { name: 'tap_width_ratio' })
  tapWidthRatio: number;

  @Column('real', { name: 'tap_height_ratio' })
  tapHeightRatio: number;

  @Column('integer', { name: 'map_position_x' })
  mapPositionX: number;

  @Column('integer', { name: 'map_position_y' })
  mapPositionY: number;

  @Column('integer', { name: 'cursor_position' })
  cursorPosition: number;

  @Column('integer', { name: 'result_boss_position_y' })
  resultBossPositionY: number;

  @Column('integer', { name: 'quest_detail_bg_id' })
  questDetailBgId: number;

  @Column('integer', { name: 'quest_detail_bg_position' })
  questDetailBgPosition: number;

  @Column('real', { name: 'quest_detail_monster_size' })
  questDetailMonsterSize: number;

  @Column('integer', { name: 'quest_detail_monster_height' })
  questDetailMonsterHeight: number;

  @Column('real', { name: 'battle_report_monster_size' })
  battleReportMonsterSize: number;

  @Column('integer', { name: 'battle_report_monster_height' })
  battleReportMonsterHeight: number;

  @Column('integer', { name: 'background' })
  background: number;

  @Column('text', { name: 'wave_bgm' })
  waveBgm: string;
}
