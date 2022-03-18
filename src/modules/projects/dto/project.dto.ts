import { FilterableField } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base/dto/base.dto';

@ObjectType('Project')
export class ProjectDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  title: string;

  @FilterableField()
  area: string;

  @Field()
  description: string;
}
