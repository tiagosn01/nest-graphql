import { CreateAddressInput } from './create-address.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
