import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base/dto/base.dto';

@ObjectType('Student')
export class ProcedureDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @Field()
  description: string;
}
