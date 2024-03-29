import { BaseEntity } from 'src/common/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Student extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  key: string;
}
