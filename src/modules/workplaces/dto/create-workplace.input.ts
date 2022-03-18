import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWorkplaceInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  code: string;

  @Field()
  phone: string;
}
