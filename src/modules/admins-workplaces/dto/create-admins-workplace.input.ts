import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdminsWorkplaceInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  is_owner?: boolean;
}
