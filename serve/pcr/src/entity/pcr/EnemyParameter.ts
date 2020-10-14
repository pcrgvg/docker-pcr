import { Column, Entity } from 'typeorm';

@Entity('enemy_parameter')
export class EnemyParameter {
  @Column('integer', { primary: true, name: 'enemy_id' })
  enemyId: number;

  @Column('integer', { name: 'unit_id' })
  unitId: number;

  @Column('text', { name: 'name' })
  name: string;

  @Column('integer', { name: 'level' })
  level: number;

  @Column('integer', { name: 'rarity' })
  rarity: number;

  @Column('integer', { name: 'promotion_level' })
  promotionLevel: number;

  @Column('integer', { name: 'hp' })
  hp: number;

  @Column('integer', { name: 'atk' })
  atk: number;

  @Column('integer', { name: 'magic_str' })
  magicStr: number;

  @Column('integer', { name: 'def' })
  def: number;

  @Column('integer', { name: 'magic_def' })
  magicDef: number;

  @Column('integer', { name: 'physical_critical' })
  physicalCritical: number;

  @Column('integer', { name: 'magic_critical' })
  magicCritical: number;

  @Column('integer', { name: 'wave_hp_recovery' })
  waveHpRecovery: number;

  @Column('integer', { name: 'wave_energy_recovery' })
  waveEnergyRecovery: number;

  @Column('integer', { name: 'dodge' })
  dodge: number;

  @Column('integer', { name: 'physical_penetrate' })
  physicalPenetrate: number;

  @Column('integer', { name: 'magic_penetrate' })
  magicPenetrate: number;

  @Column('integer', { name: 'life_steal' })
  lifeSteal: number;

  @Column('integer', { name: 'hp_recovery_rate' })
  hpRecoveryRate: number;

  @Column('integer', { name: 'energy_recovery_rate' })
  energyRecoveryRate: number;

  @Column('integer', { name: 'energy_reduce_rate' })
  energyReduceRate: number;

  @Column('integer', { name: 'union_burst_level' })
  unionBurstLevel: number;

  @Column('integer', { name: 'main_skill_lv_1' })
  mainSkillLv_1: number;

  @Column('integer', { name: 'main_skill_lv_2' })
  mainSkillLv_2: number;

  @Column('integer', { name: 'main_skill_lv_3' })
  mainSkillLv_3: number;

  @Column('integer', { name: 'main_skill_lv_4' })
  mainSkillLv_4: number;

  @Column('integer', { name: 'main_skill_lv_5' })
  mainSkillLv_5: number;

  @Column('integer', { name: 'main_skill_lv_6' })
  mainSkillLv_6: number;

  @Column('integer', { name: 'main_skill_lv_7' })
  mainSkillLv_7: number;

  @Column('integer', { name: 'main_skill_lv_8' })
  mainSkillLv_8: number;

  @Column('integer', { name: 'main_skill_lv_9' })
  mainSkillLv_9: number;

  @Column('integer', { name: 'main_skill_lv_10' })
  mainSkillLv_10: number;

  @Column('integer', { name: 'ex_skill_lv_1' })
  exSkillLv_1: number;

  @Column('integer', { name: 'ex_skill_lv_2' })
  exSkillLv_2: number;

  @Column('integer', { name: 'ex_skill_lv_3' })
  exSkillLv_3: number;

  @Column('integer', { name: 'ex_skill_lv_4' })
  exSkillLv_4: number;

  @Column('integer', { name: 'ex_skill_lv_5' })
  exSkillLv_5: number;

  @Column('integer', { name: 'resist_status_id' })
  resistStatusId: number;

  @Column('integer', { name: 'accuracy' })
  accuracy: number;

  @Column('integer', { name: 'unique_equipment_flag_1' })
  uniqueEquipmentFlag_1: number;
}
