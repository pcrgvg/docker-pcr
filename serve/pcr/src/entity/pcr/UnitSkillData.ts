import { Column, Entity } from 'typeorm';

@Entity('unit_skill_data')
export class UnitSkillData {
  @Column('integer', { primary: true, name: 'unit_id' })
  unitId: number;

  @Column('integer', { name: 'union_burst' })
  unionBurst: number;

  @Column('integer', { name: 'main_skill_1' })
  mainSkill_1: number;

  @Column('integer', { name: 'main_skill_2' })
  mainSkill_2: number;

  @Column('integer', { name: 'main_skill_3' })
  mainSkill_3: number;

  @Column('integer', { name: 'main_skill_4' })
  mainSkill_4: number;

  @Column('integer', { name: 'main_skill_5' })
  mainSkill_5: number;

  @Column('integer', { name: 'main_skill_6' })
  mainSkill_6: number;

  @Column('integer', { name: 'main_skill_7' })
  mainSkill_7: number;

  @Column('integer', { name: 'main_skill_8' })
  mainSkill_8: number;

  @Column('integer', { name: 'main_skill_9' })
  mainSkill_9: number;

  @Column('integer', { name: 'main_skill_10' })
  mainSkill_10: number;

  @Column('integer', { name: 'ex_skill_1' })
  exSkill_1: number;

  @Column('integer', { name: 'ex_skill_evolution_1' })
  exSkillEvolution_1: number;

  @Column('integer', { name: 'ex_skill_2' })
  exSkill_2: number;

  @Column('integer', { name: 'ex_skill_evolution_2' })
  exSkillEvolution_2: number;

  @Column('integer', { name: 'ex_skill_3' })
  exSkill_3: number;

  @Column('integer', { name: 'ex_skill_evolution_3' })
  exSkillEvolution_3: number;

  @Column('integer', { name: 'ex_skill_4' })
  exSkill_4: number;

  @Column('integer', { name: 'ex_skill_evolution_4' })
  exSkillEvolution_4: number;

  @Column('integer', { name: 'ex_skill_5' })
  exSkill_5: number;

  @Column('integer', { name: 'ex_skill_evolution_5' })
  exSkillEvolution_5: number;

  @Column('integer', { name: 'sp_skill_1' })
  spSkill_1: number;

  @Column('integer', { name: 'sp_skill_2' })
  spSkill_2: number;

  @Column('integer', { name: 'sp_skill_3' })
  spSkill_3: number;

  @Column('integer', { name: 'sp_skill_4' })
  spSkill_4: number;

  @Column('integer', { name: 'sp_skill_5' })
  spSkill_5: number;

  @Column('integer', { name: 'union_burst_evolution' })
  unionBurstEvolution: number;

  @Column('integer', { name: 'main_skill_evolution_1' })
  mainSkillEvolution_1: number;

  @Column('integer', { name: 'main_skill_evolution_2' })
  mainSkillEvolution_2: number;

  @Column('integer', { name: 'sp_skill_evolution_1' })
  spSkillEvolution_1: number;

  @Column('integer', { name: 'sp_skill_evolution_2' })
  spSkillEvolution_2: number;
}
