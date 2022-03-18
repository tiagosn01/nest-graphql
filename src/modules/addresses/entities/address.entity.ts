import { BaseEntity } from 'src/common/base/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Address extends BaseEntity {
  @Column()
  name: string;

  @Column()
  zipcode: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: string;
}
