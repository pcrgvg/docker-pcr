import { Column, Entity } from 'typeorm';

@Entity('unit_enemy_data')
export class UnitEnemyData {
  @Column('integer', { primary: true, name: 'unit_id' })
  unitId: number;

  @Column('text', { name: 'unit_name' })
  unitName: string;

  @Column('integer', { name: 'prefab_id' })
  prefabId: number;

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

  @Column('integer', { name: 'cutin' })
  cutin: number;

  @Column('integer', { name: 'cutin_star6' })
  cutinStar6: number;

  @Column('integer', { name: 'visual_change_flag' })
  visualChangeFlag: number;

  @Column('text', { name: 'comment' })
  comment: string;
}
