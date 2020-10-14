import { Column, Entity } from 'typeorm';

@Entity('clan_battle_s_boss_fix_reward')
export class ClanBattleSBossFixReward {
  @Column('integer', { primary: true, name: 'fix_reward_id' })
  fixRewardId: number;

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
