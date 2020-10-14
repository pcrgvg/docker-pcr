import { Column, Entity } from 'typeorm';

@Entity('emblem_data')
export class EmblemData {
  @Column('integer', { primary: true, name: 'emblem_id' })
  emblemId: number;

  @Column('integer', { name: 'disp_oder' })
  dispOder: number;

  @Column('integer', { name: 'type' })
  type: number;

  @Column('text', { name: 'emblem_name' })
  emblemName: string;

  @Column('integer', { name: 'description_mission_id' })
  descriptionMissionId: number;

  @Column('integer', { name: 'event_emblem' })
  eventEmblem: number;

  @Column('text', { name: 'start_time' })
  startTime: string;

  @Column('text', { name: 'end_time' })
  endTime: string;
}
