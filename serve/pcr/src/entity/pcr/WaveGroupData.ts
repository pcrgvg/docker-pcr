import { Column, Entity } from 'typeorm';

@Entity('wave_group_data')
export class WaveGroupData {
  @Column('integer', { primary: true, name: 'id' })
  id: number;

  @Column('integer', { name: 'wave_group_id' })
  waveGroupId: number;

  @Column('integer', { name: 'odds' })
  odds: number;

  @Column('integer', { name: 'enemy_id_1' })
  enemyId_1: number;

  @Column('integer', { name: 'drop_gold_1' })
  dropGold_1: number;

  @Column('integer', { name: 'drop_reward_id_1' })
  dropRewardId_1: number;

  @Column('integer', { name: 'enemy_id_2' })
  enemyId_2: number;

  @Column('integer', { name: 'drop_gold_2' })
  dropGold_2: number;

  @Column('integer', { name: 'drop_reward_id_2' })
  dropRewardId_2: number;

  @Column('integer', { name: 'enemy_id_3' })
  enemyId_3: number;

  @Column('integer', { name: 'drop_gold_3' })
  dropGold_3: number;

  @Column('integer', { name: 'drop_reward_id_3' })
  dropRewardId_3: number;

  @Column('integer', { name: 'enemy_id_4' })
  enemyId_4: number;

  @Column('integer', { name: 'drop_gold_4' })
  dropGold_4: number;

  @Column('integer', { name: 'drop_reward_id_4' })
  dropRewardId_4: number;

  @Column('integer', { name: 'enemy_id_5' })
  enemyId_5: number;

  @Column('integer', { name: 'drop_gold_5' })
  dropGold_5: number;

  @Column('integer', { name: 'drop_reward_id_5' })
  dropRewardId_5: number;
}
