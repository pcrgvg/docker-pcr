import { Column, Entity, Index } from 'typeorm';

@Index('clan_battle_period_0_clan_battle_id', ['clanBattleId'], {})
@Entity('clan_battle_period')
export class ClanBattlePeriod {
  @Column('integer', { primary: true, name: 'clan_battle_id' })
  clanBattleId: number;

  @Column('integer', { primary: true, name: 'period' })
  period: number;

  @Column('text', { name: 'period_detail' })
  periodDetail: string;

  @Column('integer', { name: 'period_detail_bg' })
  periodDetailBg: number;

  @Column('text', { name: 'period_detail_s' })
  periodDetailS: string;

  @Column('integer', { name: 'period_detail_bg_s' })
  periodDetailBgS: number;

  @Column('integer', { name: 'period_detail_bg_position' })
  periodDetailBgPosition: number;

  @Column('integer', { name: 'period_detail_boss_position_x' })
  periodDetailBossPositionX: number;

  @Column('integer', { name: 'period_detail_boss_position_y' })
  periodDetailBossPositionY: number;

  @Column('text', { name: 'start_time' })
  startTime: string;

  @Column('text', { name: 'end_time' })
  endTime: string;

  @Column('text', { name: 'interval_start' })
  intervalStart: string;

  @Column('text', { name: 'interval_end' })
  intervalEnd: string;

  @Column('text', { name: 'calc_start' })
  calcStart: string;

  @Column('text', { name: 'result_start' })
  resultStart: string;

  @Column('text', { name: 'result_end' })
  resultEnd: string;

  @Column('integer', { name: 'limit_time' })
  limitTime: number;

  @Column('integer', { name: 'chest_id' })
  chestId: number;

  @Column('integer', { name: 'quest_detail_rehearsal_label_height' })
  questDetailRehearsalLabelHeight: number;

  @Column('integer', { name: 'min_carry_over_time' })
  minCarryOverTime: number;
}
