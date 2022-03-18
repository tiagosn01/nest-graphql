import { BaseEntity } from 'src/common/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class AdminsWorkplace extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ default: false })
  is_owner?: boolean;
}
