import { CreateAdminsWorkplaceInput } from './create-admins-workplace.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateAdminsWorkplaceInput extends PartialType(
  CreateAdminsWorkplaceInput,
) {
  @Field(() => ID, { nullable: true })
  id: string;
}
