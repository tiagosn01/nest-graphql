import { BaseEntity } from 'src/common/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Workplace extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  code: string;

  @Column()
  phone: string;
}
