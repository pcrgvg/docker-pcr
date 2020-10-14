import { Column, Entity } from 'typeorm';

@Entity('clan_battle_schedule')
export class ClanBattleSchedule {
  @Column('integer', { primary: true, name: 'clan_battle_id' })
  clanBattleId: number;

  @Column('integer', { name: 'release_month' })
  releaseMonth: number;

  @Column('integer', { name: 'last_clan_battle_id' })
  lastClanBattleId: number;

  @Column('integer', { name: 'point_per_stamina' })
  pointPerStamina: number;

  @Column('integer', { name: 'cost_group_id' })
  costGroupId: number;

  @Column('integer', { name: 'cost_group_id_s' })
  costGroupIdS: number;

  @Column('text', { name: 'map_bgm' })
  mapBgm: string;

  @Column('integer', { name: 'resource_id' })
  resourceId: number;

  @Column('text', { name: 'start_time' })
  startTime: string;

  @Column('text', { name: 'end_time' })
  endTime: string;
}
