import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base/dto/base.dto';

@ObjectType('Specialty')
export class SpecialtyDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @Field()
  description: string;

  @FilterableField()
  area: string;
}
