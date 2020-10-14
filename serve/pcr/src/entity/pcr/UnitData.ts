import { Column, Entity } from 'typeorm';

@Entity('unit_data')
export class UnitData {
  @Column('integer', { primary: true, name: 'unit_id' })
  unitId: number;

  @Column('text', { name: 'unit_name' })
  unitName: string;

  @Column('text', { name: 'kana' })
  kana: string;

  @Column('integer', { name: 'prefab_id' })
  prefabId: number;

  @Column('integer', { name: 'is_limited' })
  isLimited: number;

  @Column('integer', { name: 'rarity' })
  rarity: number;

  @Column('integer', { name: 'motion_type' })
  motionType: number;

  @Column('integer', { name: 'se_type' })
  seType: number;

  @Column('integer', { name: 'move_speed' })
  moveSpeed: number;

  @Column('integer', { name: 'search_area_width' })
  searchAreaWidth: number;

  @Column('integer', { name: 'atk_type' })
  atkType: number;

  @Column('real', { name: 'normal_atk_cast_time' })
  normalAtkCastTime: number;

  @Column('integer', { name: 'cutin_1' })
  cutin_1: number;

  @Column('integer', { name: 'cutin_2' })
  cutin_2: number;

  @Column('integer', { name: 'cutin1_star6' })
  cutin1Star6: number;

  @Column('integer', { name: 'cutin2_star6' })
  cutin2Star6: number;

  @Column('integer', { name: 'guild_id' })
  guildId: number;

  @Column('integer', { name: 'exskill_display' })
  exskillDisplay: number;

  @Column('text', { name: 'comment' })
  comment: string;

  @Column('integer', { name: 'only_disp_owned' })
  onlyDispOwned: number;

  @Column('text', { name: 'start_time' })
  startTime: string;

  @Column('text', { name: 'end_time' })
  endTime: string;
}
