import { Column, Entity, Index } from 'typeorm';

@Index('unit_rarity_0_unit_material_id', ['unitMaterialId'], {})
@Index('unit_rarity_0_unit_id', ['unitId'], {})
@Entity('unit_rarity')
export class UnitRarity {
  @Column('integer', { primary: true, name: 'unit_id' })
  unitId: number;

  @Column('integer', { primary: true, name: 'rarity' })
  rarity: number;

  @Column('real', { name: 'hp' })
  hp: number;

  @Column('real', { name: 'hp_growth' })
  hpGrowth: number;

  @Column('real', { name: 'atk' })
  atk: number;

  @Column('real', { name: 'atk_growth' })
  atkGrowth: number;

  @Column('real', { name: 'magic_str' })
  magicStr: number;

  @Column('real', { name: 'magic_str_growth' })
  magicStrGrowth: number;

  @Column('real', { name: 'def' })
  def: number;

  @Column('real', { name: 'def_growth' })
  defGrowth: number;

  @Column('real', { name: 'magic_def' })
  magicDef: number;

  @Column('real', { name: 'magic_def_growth' })
  magicDefGrowth: number;

  @Column('real', { name: 'physical_critical' })
  physicalCritical: number;

  @Column('real', { name: 'physical_critical_growth' })
  physicalCriticalGrowth: number;

  @Column('real', { name: 'magic_critical' })
  magicCritical: number;

  @Column('real', { name: 'magic_critical_growth' })
  magicCriticalGrowth: number;

  @Column('real', { name: 'wave_hp_recovery' })
  waveHpRecovery: number;

  @Column('real', { name: 'wave_hp_recovery_growth' })
  waveHpRecoveryGrowth: number;

  @Column('real', { name: 'wave_energy_recovery' })
  waveEnergyRecovery: number;

  @Column('real', { name: 'wave_energy_recovery_growth' })
  waveEnergyRecoveryGrowth: number;

  @Column('real', { name: 'dodge' })
  dodge: number;

  @Column('real', { name: 'dodge_growth' })
  dodgeGrowth: number;

  @Column('real', { name: 'physical_penetrate' })
  physicalPenetrate: number;

  @Column('real', { name: 'physical_penetrate_growth' })
  physicalPenetrateGrowth: number;

  @Column('real', { name: 'magic_penetrate' })
  magicPenetrate: number;

  @Column('real', { name: 'magic_penetrate_growth' })
  magicPenetrateGrowth: number;

  @Column('real', { name: 'life_steal' })
  lifeSteal: number;

  @Column('real', { name: 'life_steal_growth' })
  lifeStealGrowth: number;

  @Column('real', { name: 'hp_recovery_rate' })
  hpRecoveryRate: number;

  @Column('real', { name: 'hp_recovery_rate_growth' })
  hpRecoveryRateGrowth: number;

  @Column('real', { name: 'energy_recovery_rate' })
  energyRecoveryRate: number;

  @Column('real', { name: 'energy_recovery_rate_growth' })
  energyRecoveryRateGrowth: number;

  @Column('real', { name: 'energy_reduce_rate' })
  energyReduceRate: number;

  @Column('real', { name: 'energy_reduce_rate_growth' })
  energyReduceRateGrowth: number;

  @Column('integer', { name: 'unit_material_id' })
  unitMaterialId: number;

  @Column('integer', { name: 'consume_num' })
  consumeNum: number;

  @Column('integer', { name: 'consume_gold' })
  consumeGold: number;

  @Column('real', { name: 'accuracy' })
  accuracy: number;

  @Column('real', { name: 'accuracy_growth' })
  accuracyGrowth: number;
}
