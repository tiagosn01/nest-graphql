import { BaseEntity } from 'src/common/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Project extends BaseEntity {
  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  area: string;

  @Column()
  description: string;
}
