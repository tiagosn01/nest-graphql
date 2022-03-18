import { CreateSpecialtyInput } from './create-specialty.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateSpecialtyInput extends PartialType(CreateSpecialtyInput) {
  @Field(() => ID, { nullable: true })
  id?: string;
}
