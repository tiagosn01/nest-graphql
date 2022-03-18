import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base/dto/base.dto';

@ObjectType('Address')
export class AddressDTO extends BaseDTO {
  @Field()
  name: string;

  @Field()
  street: string;

  @Field()
  number: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @FilterableField()
  zipcode: string;
}
