import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base/dto/base.dto';

@ObjectType('AdminsWorkplace')
export class AdminsWorkplaceDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  email: string;

  @Field()
  phone: string;

  @Field()
  is_owner?: boolean;
}
