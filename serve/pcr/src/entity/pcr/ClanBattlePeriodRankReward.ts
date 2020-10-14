import { Column, Entity } from 'typeorm';

@Entity('clan_battle_period_rank_reward')
export class ClanBattlePeriodRankReward {
  @Column('integer', { primary: true, name: 'id' })
  id: number;

  @Column('integer', { name: 'clan_battle_id' })
  clanBattleId: number;

  @Column('integer', { name: 'period' })
  period: number;

  @Column('integer', { name: 'rank_from' })
  rankFrom: number;

  @Column('integer', { name: 'rank_to' })
  rankTo: number;

  @Column('integer', { name: 'ranking_bonus_group' })
  rankingBonusGroup: number;

  @Column('integer', { name: 'reward_type_1' })
  rewardType_1: number;

  @Column('integer', { name: 'reward_id_1' })
  rewardId_1: number;

  @Column('integer', { name: 'reward_num_1' })
  rewardNum_1: number;

  @Column('integer', { name: 'reward_type_2' })
  rewardType_2: number;

  @Column('integer', { name: 'reward_id_2' })
  rewardId_2: number;

  @Column('integer', { name: 'reward_num_2' })
  rewardNum_2: number;

  @Column('integer', { name: 'reward_type_3' })
  rewardType_3: number;

  @Column('integer', { name: 'reward_id_3' })
  rewardId_3: number;

  @Column('integer', { name: 'reward_num_3' })
  rewardNum_3: number;

  @Column('integer', { name: 'reward_type_4' })
  rewardType_4: number;

  @Column('integer', { name: 'reward_id_4' })
  rewardId_4: number;

  @Column('integer', { name: 'reward_num_4' })
  rewardNum_4: number;

  @Column('integer', { name: 'reward_type_5' })
  rewardType_5: number;

  @Column('integer', { name: 'reward_id_5' })
  rewardId_5: number;

  @Column('integer', { name: 'reward_num_5' })
  rewardNum_5: number;
}
