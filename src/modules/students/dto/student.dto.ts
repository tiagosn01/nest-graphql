import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from 'src/common/base/dto/base.dto';

@ObjectType('Student')
export class StudentDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  email: string;

  @FilterableField()
  key: string;
}
