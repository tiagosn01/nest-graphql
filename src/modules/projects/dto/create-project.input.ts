import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectInput {
  @Field()
  name: string;

  @Field()
  title: string;

  @Field()
  area: string;

  @Field()
  description?: string;
}
