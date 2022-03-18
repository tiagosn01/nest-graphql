import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateSpecialtyInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  area: string;
}
