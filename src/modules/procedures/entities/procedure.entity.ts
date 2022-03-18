import { BaseEntity } from 'src/common/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Procedure extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;
}
