import { Column, Entity, Index } from 'typeorm';

@Index('clan_battle_s_map_data_0_clan_battle_id', ['clanBattleId'], {})
@Entity('clan_battle_s_map_data')
export class ClanBattleSMapData {
  @Column('integer', { primary: true, name: 'id' })
  id: number;

  @Column('integer', { name: 'clan_battle_id' })
  clanBattleId: number;

  @Column('integer', { name: 'map_bg' })
  mapBg: number;

  @Column('integer', { name: 'difficulty' })
  difficulty: number;

  @Column('integer', { name: 'lap_num_from' })
  lapNumFrom: number;

  @Column('integer', { name: 'lap_num_to' })
  lapNumTo: number;

  @Column('integer', { name: 'boss_id_1' })
  bossId_1: number;

  @Column('integer', { name: 'boss_id_2' })
  bossId_2: number;

  @Column('integer', { name: 'boss_id_3' })
  bossId_3: number;

  @Column('integer', { name: 'boss_id_4' })
  bossId_4: number;

  @Column('integer', { name: 'boss_id_5' })
  bossId_5: number;

  @Column('integer', { name: 'extra_battle_flag1' })
  extraBattleFlag1: number;

  @Column('integer', { name: 'extra_battle_flag2' })
  extraBattleFlag2: number;

  @Column('integer', { name: 'extra_battle_flag3' })
  extraBattleFlag3: number;

  @Column('integer', { name: 'extra_battle_flag4' })
  extraBattleFlag4: number;

  @Column('integer', { name: 'extra_battle_flag5' })
  extraBattleFlag5: number;

  @Column('integer', { name: 'aura_effect' })
  auraEffect: number;

  @Column('integer', { name: 'rsl_unlock_lap' })
  rslUnlockLap: number;

  @Column('integer', { name: 'phase' })
  phase: number;

  @Column('integer', { name: 'wave_group_id_1' })
  waveGroupId_1: number;

  @Column('integer', { name: 'wave_group_id_2' })
  waveGroupId_2: number;

  @Column('integer', { name: 'wave_group_id_3' })
  waveGroupId_3: number;

  @Column('integer', { name: 'wave_group_id_4' })
  waveGroupId_4: number;

  @Column('integer', { name: 'wave_group_id_5' })
  waveGroupId_5: number;

  @Column('integer', { name: 'fix_reward_id_1' })
  fixRewardId_1: number;

  @Column('integer', { name: 'fix_reward_id_2' })
  fixRewardId_2: number;

  @Column('integer', { name: 'fix_reward_id_3' })
  fixRewardId_3: number;

  @Column('integer', { name: 'fix_reward_id_4' })
  fixRewardId_4: number;

  @Column('integer', { name: 'fix_reward_id_5' })
  fixRewardId_5: number;

  @Column('integer', { name: 'damage_rank_id_1' })
  damageRankId_1: number;

  @Column('integer', { name: 'damage_rank_id_2' })
  damageRankId_2: number;

  @Column('integer', { name: 'damage_rank_id_3' })
  damageRankId_3: number;

  @Column('integer', { name: 'damage_rank_id_4' })
  damageRankId_4: number;

  @Column('integer', { name: 'damage_rank_id_5' })
  damageRankId_5: number;

  @Column('real', { name: 'reward_gold_coefficient' })
  rewardGoldCoefficient: number;

  @Column('integer', { name: 'limited_mana' })
  limitedMana: number;

  @Column('integer', { name: 'last_attack_reward_id' })
  lastAttackRewardId: number;

  @Column('real', { name: 'score_coefficient_1' })
  scoreCoefficient_1: number;

  @Column('real', { name: 'score_coefficient_2' })
  scoreCoefficient_2: number;

  @Column('real', { name: 'score_coefficient_3' })
  scoreCoefficient_3: number;

  @Column('real', { name: 'score_coefficient_4' })
  scoreCoefficient_4: number;

  @Column('real', { name: 'score_coefficient_5' })
  scoreCoefficient_5: number;

  @Column('integer', { name: 'param_adjust_id' })
  paramAdjustId: number;

  @Column('integer', { name: 'param_adjust_interval' })
  paramAdjustInterval: number;
}
