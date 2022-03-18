import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
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

  @Field()
  zipcode: string;
}
